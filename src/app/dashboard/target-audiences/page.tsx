"use client";

import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { targetAudiencesApi } from "@/lib/api";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";

import TargetAudienceTable from "@/components/layout/features/targetaudience/targetAudienceTable";
import TargetAudienceForm from "@/components/layout/features/targetaudience/TargetAudienceForm";
import type { TargetAudience } from "@/store/copilotStore";
import DashboardHeader from "@/components/layout/DashboardHeader";
import { useI18n } from "@/lib/i18n";

export default function ScrapeProfilesPage() {
  const { t } = useI18n();
  const [profiles, setProfiles] = useState<TargetAudience[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingAudience, setEditingAudience] = useState<TargetAudience | null>(
    null,
  );
  const [runningId, setRunningId] = useState<number | null>(null);
  const [urlId, setUrlId] = useState<string | null>(null);

  const { user } = useUser();

  useEffect(() => {
    fetchProfiles();
  }, []);
  useEffect(() => {
    const checkNewParam = () => {
      const params = new URLSearchParams(window.location.search);
      const isNew = params.get("new") === "true";

      if (isNew) {
        setShowModal(true);
      }
    };
    checkNewParam();
  }, []);

  async function fetchProfiles() {
    try {
      setLoading(true);
      const res = await targetAudiencesApi.getAll();
      console.log("Fetched profiles:", res.data);
      setProfiles(res.data);
    } catch {
      setProfiles([]);
    } finally {
      setLoading(false);
    }
  }

  async function handleRun(id: number) {
    try {
      setRunningId(id);
      await targetAudiencesApi.run(id);
      fetchProfiles();
    } catch {
      toast.error(t("Failed to start. Please try again."));
    } finally {
      setRunningId(null);
    }
  }

  async function handleDelete(id: number) {
    if (!confirm(t("Delete this target audience?"))) return;
    try {
      await targetAudiencesApi.delete(id);
      fetchProfiles();
    } catch {
      toast.error(t("Failed to delete."));
    }
  }

  async function handleDuplicate(audience: TargetAudience) {
    try {
      await targetAudiencesApi.create({
        name: `${audience.name} (${t("Copy")})`,
        searchQuery: audience.searchQuery,
        country: audience.country || "",
        city: audience.city || "",
      });
      toast.success(t("Target audience duplicated."));
      fetchProfiles();
    } catch {
      toast.error(t("Failed to duplicate the target audience."));
    }
  }
  async function handleEdit(audience: TargetAudience) {
    setEditingAudience(audience);
    setShowModal(true);
  }

  useEffect(() => {
    if (!window.location.hash || profiles.length === 0) return;

    const elementId = window.location.hash.substring(1);
    setUrlId(elementId);

    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    const timeout = setTimeout(() => {
      setUrlId("");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [profiles]);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-8 py-4 sm:py-5">
      <DashboardHeader
        title="Target Audience"
        description="Define who you want to reach with your copilot."
        actionLabel="Create New Target Audience"
        mobileActionLabel="Add"
        onAction={() => {
          setEditingAudience(null);
          setShowModal(true);
        }}
      />

      {loading ? (
        <div className="flex items-center justify-center h-48 text-gray-400">
          {t("Loading...")}
        </div>
      ) : (
        <TargetAudienceTable
          targetAudiences={profiles}
          onEdit={handleEdit}
          onDelete={(audience) => handleDelete(audience.id)}
          onDuplicate={handleDuplicate}
          onCreateNew={() => {
            setEditingAudience(null);
            setShowModal(true);
          }}
        />
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-70 p-4">
          <TargetAudienceForm
            initialData={editingAudience}
            onCancel={() => {
              setShowModal(false);
              setEditingAudience(null);
            }}
            onSuccess={() => {
              setShowModal(false);
              setEditingAudience(null);
              fetchProfiles();
            }}
          />
        </div>
      )}
    </div>
  );
}
