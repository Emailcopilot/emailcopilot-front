"use client";

import { useLayoutEffect, useRef } from "react";
import { X } from "lucide-react";
import type { TooltipPlacementResult } from "./tour-positioning";
import {
  KIND_THEME,
  type TourLocaleBundle,
  type TourStepConfig,
} from "./tour-types";

export function TourTooltip({
  step,
  stepIndex,
  totalSteps,
  sameScreenIndex,
  sameScreenTotal,
  placement,
  translations,
  onMeasure,
  onNext,
  onBack,
  onClose,
}: {
  step: TourStepConfig;
  stepIndex: number;
  totalSteps: number;
  sameScreenIndex: number;
  sameScreenTotal: number;
  placement: TooltipPlacementResult;
  translations: TourLocaleBundle;
  onMeasure: (size: { width: number; height: number }) => void;
  onNext: () => void;
  onBack: () => void;
  onClose: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const theme = KIND_THEME[step.kind];
  const copy = translations.steps[step.id];
  const { ui } = translations;

  useLayoutEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const measure = () => {
      onMeasure({ width: el.offsetWidth, height: el.offsetHeight });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [onMeasure, step.id, copy.body, copy.title]);

  const categoryText =
    step.wizardStep != null
      ? ui.wizardStep(step.wizardStep)
      : ui.beforeStart;

  const isLast = stepIndex >= totalSteps - 1;
  const side = placement.side;

  const arrowStyle: React.CSSProperties | null =
    side === "right"
      ? { left: -6, top: placement.arrowOffset }
      : side === "left"
        ? { right: -6, top: placement.arrowOffset }
        : side === "bottom"
          ? { top: -6, left: placement.arrowOffset }
          : side === "top"
            ? { bottom: -6, left: placement.arrowOffset }
            : null;

  return (
    <div
      ref={cardRef}
      role="dialog"
      aria-modal="false"
      aria-label={copy.title}
      className="fixed z-[80] w-[min(336px,calc(100vw-28px))] rounded-2xl bg-white px-[18px] pt-[17px] pb-[15px] shadow-[0_20px_48px_-18px_rgba(15,23,42,0.42),0_0_0_1px_rgba(15,23,42,0.08)] transition-[left,top] duration-300 ease-out motion-reduce:transition-none"
      style={{
        left: placement.left,
        top: placement.top,
      }}
    >
      {arrowStyle && (
        <span
          aria-hidden
          className="absolute h-[13px] w-[13px] rotate-45 bg-white"
          style={arrowStyle}
        />
      )}

      <button
        type="button"
        onClick={onClose}
        aria-label={ui.close}
        className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
      >
        <X size={15} />
      </button>

      <div className="mb-2 flex items-center gap-2 pr-7">
        <span
          className="text-[10.5px] font-bold uppercase tracking-[0.09em]"
          style={{ color: theme.fg }}
        >
          {categoryText}
        </span>
        <span
          className="rounded-[5px] px-[7px] py-[2.5px] text-[10px] font-bold uppercase tracking-[0.05em]"
          style={{
            backgroundColor: theme.badgeBg,
            color: theme.badgeFg,
          }}
        >
          {ui.kinds[step.kind]}
        </span>
      </div>

      <h3 className="mb-1.5 text-[17px] font-bold leading-snug tracking-[-0.01em] text-slate-900">
        {copy.title}
      </h3>
      <p className="break-words text-[13.5px] leading-[1.55] text-slate-600">
        {copy.body}
      </p>

      <div className="mt-2.5 flex items-baseline gap-1.5 text-xs text-slate-500">
        <span aria-hidden>→</span>
        <span className="font-medium text-slate-700">{copy.anchor}</span>
      </div>

      <div className="mt-3.5 flex items-center gap-2 border-t border-slate-100 pt-3">
        <span className="mr-auto text-xs tabular-nums text-slate-400">
          {ui.stepOf(sameScreenIndex + 1, sameScreenTotal)}
        </span>

        <button
          type="button"
          onClick={onBack}
          disabled={stepIndex <= 0}
          className="rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {ui.back}
        </button>

        <button
          type="button"
          onClick={onNext}
          className="rounded-lg px-3.5 py-1.5 text-[13px] font-medium text-white transition-all hover:brightness-110"
          style={{ backgroundColor: theme.btn }}
        >
          {isLast ? ui.finish : ui.next}
        </button>
      </div>
    </div>
  );
}
