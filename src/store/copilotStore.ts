"use client";

import { create } from "zustand";
import { copilotsApi } from "@/lib/api";
import { clearDemoPending } from "@/lib/demo/demo-storage";

export type Step = 1 | 2 | 3 | 4 | 5 | 6;
export type CopilotStatusType =
  | "active"
  | "running"
  | "paused"
  | "completed"
  | "draft"
  | "archived";

// Matches schema: copilots table + settings jsonb
export interface CopilotData {
  id?: number;
  name: string;
  description: string;
  goal: string;
  status?: CopilotStatusType;
  emailAccountId: number | null;
  targetAudienceId: number | null;
  emailsSent?: number;
  templateId: number | null;
  flightScheduleId: number | null;
  flightSchedule: {
    name: string;
    sendLimit: number | null;
    sendLimitActive: boolean;
    activeDays: number[];
    sendingHours: { start: string; end: string };
    sendingHoursActive: boolean;
    timezone: string;
  };

  targetProfile: {
    industries: string[];
    countries: string[];
    cities: string[];
  };
}

// Matches schema: emailProfiles table
export interface EmailProfile {
  id: number;
  name: string;
  email: string;
  provider: "gmail" | "outlook" | "smtp";
  status: "active" | "inactive" | "error";
  dailyLimit: number;
  sentToday: number;
}

// Matches schema: targetAudiences table
export interface TargetAudience {
  id: number;
  name: string;

  country: string;
  city: string;
  searchQuery: string[];
  status: "idle" | "running" | "done" | "error";
  resultsCount: number;
  lastRun: string | null;
  updatedAt: string;
  createdAt: string;
  userId: number;
}

export type CopilotMode = "create" | "edit" | "duplicate";

interface CopilotStore {
  currentStep: Step;
  copilotData: CopilotData;
  copilots: CopilotData[];
  isLoading: boolean;
  launched: boolean;
  mode: CopilotMode;
  editingId: number | null;
  highestStep: Step;

  setStep: (step: Step) => void;
  updateCopilotData: (data: Partial<CopilotData>) => void;
  // updateSettings: (settings: Partial<CopilotData["settings"]>) => void;
  updateFlightSchedule: (
    schedule: Partial<CopilotData["flightSchedule"]>,
  ) => void;
  updateTargetProfile: (profile: Partial<CopilotData["targetProfile"]>) => void;
  setLaunched: (launched: boolean) => void;
  setMode: (mode: CopilotMode) => void;
  setEditingId: (id: number | null) => void;
  loadCopilot: (data: CopilotData, id?: number, mode?: CopilotMode) => void;
  resetStore: () => void;
  getAllCopilots: () => Promise<void>;
  draftId: number | null;
  setDraftId: (id: number | null) => void;
  /** The copilot being edited was live (active/running) when the wizard opened. */
  editingLive: boolean;
  setEditingLive: (live: boolean) => void;
  /**
   * Re-launch flow: a step's "Re-launch" button sets `relaunchPending` and
   * runs the step's normal save. When that save finishes it calls setStep
   * to advance; setStep then flips `relaunchRequested` instead of moving on,
   * and the wizard page launches the copilot.
   */
  relaunchPending: boolean;
  relaunchRequested: boolean;
  setRelaunchPending: (pending: boolean) => void;
  clearRelaunchRequest: () => void;
  /**
   * Persists the current draft to the backend (upsert): PUTs when a draft
   * id is known, otherwise POSTs and captures the new id. Returns the id.
   * Pass `partial` to PUT only the fields that changed (update path) —
   * e.g. `persistDraft({ templateId })` sends just `{"templateId": …}`.
   * Creates always send the full payload (a POST needs all fields).
   * Throwing lets callers refuse to advance on failed saves.
   */
  persistDraft: (partial?: Partial<PersistDraftPayload>) => Promise<number>;
}

export type PersistDraftPayload = {
  name: string;
  description: string;
  goal: string;
  emailAccountId: number | null;
  targetAudienceId: number | null;
  templateId: number | null;
  flightScheduleId: number | null;
  status: "draft";
};

const defaultCopilotData: CopilotData = {  name: "",
  description: "",
  goal: "",
  emailAccountId: null,
  targetAudienceId: null,
  templateId: null,

  flightScheduleId: null,
  flightSchedule: {
    name: "",
    sendLimit: 10,
    sendLimitActive: false,
    activeDays: [1, 2, 3, 4, 5],
    sendingHours: { start: "08:00", end: "17:00" },
    sendingHoursActive: false,
    timezone: "Europe/Brussels",
  },

  targetProfile: {
    industries: [],
    countries: [],
    cities: [],
  },
};

export const useCopilotStore = create<CopilotStore>((set, get) => ({
  currentStep: 1,
  copilotData: defaultCopilotData,
  copilots: [],
  isLoading: false,
  launched: false,
  mode: "create",
  editingId: null,
  highestStep: 1,
  draftId: null,
  editingLive: false,
  relaunchPending: false,
  relaunchRequested: false,

  setStep: (step) =>
    set((state) =>
      state.relaunchPending
        ? { relaunchPending: false, relaunchRequested: true }
        : {
            currentStep: step,
            highestStep: Math.max(state.highestStep, step) as Step,
          },
    ),

  setEditingLive: (live) => set({ editingLive: live }),

  setRelaunchPending: (pending) => set({ relaunchPending: pending }),

  clearRelaunchRequest: () => set({ relaunchRequested: false }),

  updateCopilotData: (data) =>
    set((state) => ({
      copilotData: { ...state.copilotData, ...data },
    })),

  updateFlightSchedule: (schedule) =>
    set((state) => ({
      copilotData: {
        ...state.copilotData,
        flightSchedule: { ...state.copilotData.flightSchedule, ...schedule },
      },
    })),

  updateTargetProfile: (targetProfile) =>
    set((state) => ({
      copilotData: {
        ...state.copilotData,
        targetProfile: { ...state.copilotData.targetProfile, ...targetProfile },
      },
    })),

  setLaunched: (launched) => set({ launched }),

  setMode: (mode) => set({ mode }),

  setEditingId: (id) => set({ editingId: id }),

  setDraftId: (id) => set({ draftId: id }),

  persistDraft: async (partial) => {
    const { copilotData, draftId } = get();
    const fullPayload: PersistDraftPayload = {
      name: copilotData.name?.trim() || "Untitled Copilot",
      description: copilotData.description || "",
      goal: copilotData.goal || "",
      emailAccountId: copilotData.emailAccountId,
      targetAudienceId: copilotData.targetAudienceId,
      templateId: copilotData.templateId,
      flightScheduleId: copilotData.flightScheduleId,
      status: "draft" as const,
    };
    if (draftId) {
      // Update path: send only the changed fields when provided, so
      // untouched copilot data can never be overwritten by stale state.
      // Every wizard save puts the copilot back in draft (editing pauses a
      // live copilot until it is launched again).
      await copilotsApi.update(
        draftId,
        partial ? { ...partial, status: "draft" } : fullPayload,
      );
      return draftId;
    }
    const res = await copilotsApi.create(fullPayload);
    const id = res.data.id;
    clearDemoPending();
    set({ draftId: id });
    return id;
  },

  loadCopilot: (data, id, mode = "edit") =>
    set({
      copilotData: data,
      editingId: id ?? null,
      mode,
      highestStep: 6,
    }),

  resetStore: () =>
    set({
      currentStep: 1,
      copilotData: defaultCopilotData,
      launched: false,
      mode: "create",
      editingId: null,
      draftId: null,
      highestStep: 1,
      editingLive: false,
      relaunchPending: false,
      relaunchRequested: false,
    }),
  getAllCopilots: async () => {
    try {
      const response = await copilotsApi.getAll();
      set({ copilots: response.data, isLoading: false });
    } catch (error) {
      console.error("Error fetching copilots:", error);
      set({ isLoading: false });
    }
  },
}));
