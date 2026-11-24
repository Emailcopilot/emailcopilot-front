"use client";

import { useEffect, useState } from "react";
import {
  computeTooltipPlacement,
  type RectBox,
  type TooltipPlacementResult,
} from "./tour-positioning";
import type { TourStepConfig } from "./tour-types";

function findVisibleTourElement(targetKey: string): HTMLElement | null {
  const nodes = document.querySelectorAll<HTMLElement>(
    `[data-tour="${CSS.escape(targetKey)}"]`,
  );
  for (const el of nodes) {
    if (el.getClientRects().length === 0) continue;
    const rect = el.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) return el;
  }
  return null;
}

function readRect(el: HTMLElement | null): RectBox | null {
  if (!el || !el.isConnected) return null;
  const r = el.getBoundingClientRect();
  if (r.width <= 0 || r.height <= 0) return null;
  return { left: r.left, top: r.top, width: r.width, height: r.height };
}

function isOutOfContainerView(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect();
  const scrollContainer = document.getElementById("dashboard-main");
  const containerRect = scrollContainer
    ? scrollContainer.getBoundingClientRect()
    : { top: 0, bottom: window.innerHeight };

  return (
    rect.top < Math.max(containerRect.top + 16, 16) ||
    rect.bottom > Math.min(containerRect.bottom - 96, window.innerHeight - 96)
  );
}

export function useTourTarget({
  isOpen,
  activeStep,
  tooltipWidth,
  tooltipHeight,
}: {
  isOpen: boolean;
  activeStep: TourStepConfig | undefined;
  tooltipWidth: number;
  tooltipHeight: number;
}): TooltipPlacementResult {
  const [targetRect, setTargetRect] = useState<RectBox | null>(null);
  const [viewport, setViewport] = useState<{ w: number; h: number }>({
    w: 1280,
    h: 800,
  });

  useEffect(() => {
    if (!isOpen || !activeStep) {
      return;
    }

    let cancelled = false;
    let resizeObserver: ResizeObserver | null = null;
    let mutationObserver: MutationObserver | null = null;
    let currentEl: HTMLElement | null = null;
    let scrolledStepId: string | null = null;

    const updateViewport = () => {
      if (cancelled) return;
      setViewport({ w: window.innerWidth, h: window.innerHeight });
    };

    const syncMeasurement = () => {
      if (cancelled) return;
      updateViewport();
      const found = findVisibleTourElement(activeStep.target);
      if (found !== currentEl) {
        resizeObserver?.disconnect();
        currentEl = found;
        if (found) {
          resizeObserver = new ResizeObserver(() => {
            if (!cancelled) setTargetRect(readRect(currentEl));
          });
          resizeObserver.observe(found);
        }
      }

      if (found && scrolledStepId !== activeStep.id) {
        scrolledStepId = activeStep.id;
        if (isOutOfContainerView(found)) {
          const reduced =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          found.scrollIntoView({
            block: "center",
            inline: "nearest",
            behavior: reduced ? "auto" : "smooth",
          });
        }
      }

      setTargetRect(readRect(found));
    };

    updateViewport();
    syncMeasurement();

    // Retry briefly while new wizard step / route / tab mounts.
    const startedAt = Date.now();
    const poll = window.setInterval(() => {
      syncMeasurement();
      if (currentEl || Date.now() - startedAt > 1200) {
        window.clearInterval(poll);
      }
    }, 60);

    const container = document.getElementById("dashboard-main");
    if (container) {
      mutationObserver = new MutationObserver(() => syncMeasurement());
      mutationObserver.observe(container, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class", "hidden", "style", "data-tour"],
      });
    }

    const onScrollOrResize = () => syncMeasurement();
    window.addEventListener("resize", onScrollOrResize);
    window.addEventListener("scroll", onScrollOrResize, true);

    return () => {
      cancelled = true;
      window.clearInterval(poll);
      resizeObserver?.disconnect();
      mutationObserver?.disconnect();
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("scroll", onScrollOrResize, true);
    };
  }, [activeStep, isOpen]);

  return computeTooltipPlacement({
    targetRect: isOpen && activeStep ? targetRect : null,
    viewportWidth: viewport.w,
    viewportHeight: viewport.h,
    tooltipWidth,
    tooltipHeight,
    bottomReserve: 20,
  });
}
