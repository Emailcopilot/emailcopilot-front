const TOUR_SEEN_PREFIX = "emailcopilot:copilot-tour-seen:";

export function tourSeenKey(userId: string | null | undefined) {
  return `${TOUR_SEEN_PREFIX}${userId || "anon"}`;
}

export function readTourSeen(userId: string | null | undefined): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(tourSeenKey(userId)) === "1";
  } catch {
    return false;
  }
}

export function writeTourSeen(userId: string | null | undefined): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(tourSeenKey(userId), "1");
  } catch {
    // storage unavailable
  }
}
