"use client";

import { useCallback, useState } from "react";
import { useTour } from "./TourProvider";
import { TourSpotlight } from "./TourSpotlight";
import { TourTooltip } from "./TourTooltip";
import { useTourTarget } from "./useTourTarget";

export function CopilotTourOverlay() {
  const {
    isOpen,
    activeIndex,
    visibleSteps,
    activeStep,
    translations,
    next,
    back,
    closeTour,
  } = useTour();

  const [tooltipSize, setTooltipSize] = useState({ width: 336, height: 220 });

  const handleMeasureTooltip = useCallback(
    (nextSize: { width: number; height: number }) => {
      setTooltipSize((prev) =>
        prev.width === nextSize.width && prev.height === nextSize.height
          ? prev
          : nextSize,
      );
    },
    [],
  );

  const placement = useTourTarget({
    isOpen,
    activeStep,
    tooltipWidth: tooltipSize.width,
    tooltipHeight: tooltipSize.height,
  });

  if (!isOpen || !activeStep) return null;

  const sameScreenSteps = visibleSteps.filter(
    (step) => step.screen === activeStep.screen,
  );
  const sameScreenIndex = Math.max(
    0,
    sameScreenSteps.findIndex((step) => step.id === activeStep.id),
  );

  return (
    <>
      <TourSpotlight
        spotlight={placement.spotlight}
        side={placement.side}
        kind={activeStep.kind}
      />

      <TourTooltip
        step={activeStep}
        stepIndex={activeIndex}
        totalSteps={visibleSteps.length}
        sameScreenIndex={sameScreenIndex}
        sameScreenTotal={sameScreenSteps.length}
        placement={placement}
        translations={translations}
        onMeasure={handleMeasureTooltip}
        onNext={next}
        onBack={back}
        onClose={closeTour}
      />
    </>
  );
}
