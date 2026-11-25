import assert from "node:assert/strict";
import { test } from "node:test";
import { computeTooltipPlacement } from "../src/components/tour/tour-positioning.ts";
import {
  COPILOT_TOUR_STEPS,
  getVisibleTourSteps,
  resolveStepIndexAfterModeChange,
} from "../src/components/tour/tour-steps.ts";
import {
  TOUR_TRANSLATIONS,
  getTourTranslations,
} from "../src/components/tour/tour-i18n.ts";

const EXPECTED_LOCALES = ["en", "nl", "de", "fr", "es"];

test("all 5 project locales define complete non-empty copy for every Copilot tour stop", () => {
  assert.deepEqual(Object.keys(TOUR_TRANSLATIONS).sort(), [...EXPECTED_LOCALES].sort());

  for (const locale of EXPECTED_LOCALES) {
    const bundle = getTourTranslations(locale);
    assert.ok(bundle.ui.takeTour.trim().length > 0);
    assert.ok(bundle.ui.essentials.trim().length > 0);
    assert.ok(bundle.ui.fullTour.trim().length > 0);
    assert.ok(bundle.ui.wizardStep(3).includes("3"));

    for (const step of COPILOT_TOUR_STEPS) {
      const copy = bundle.steps[step.id];
      assert.ok(copy, `Missing step copy for ${locale}:${step.id}`);
      assert.ok(copy.title.trim().length > 0, `Empty title for ${locale}:${step.id}`);
      assert.ok(copy.body.trim().length > 0, `Empty body for ${locale}:${step.id}`);
      assert.ok(copy.anchor.trim().length > 0, `Empty anchor for ${locale}:${step.id}`);
    }
  }

  assert.equal(getTourTranslations("pt"), TOUR_TRANSLATIONS.en);
});

test("essentials mode spans Copilots intro through all 6 wizard steps and filters live-edit stop when inactive", () => {
  const essentials = getVisibleTourSteps("essentials", { includeLiveEdit: true });
  const essentialsDraft = getVisibleTourSteps("essentials", { includeLiveEdit: false });
  const full = getVisibleTourSteps("full", { includeLiveEdit: true });

  assert.ok(essentials.length < full.length);
  assert.deepEqual(
    [...new Set(essentials.map((s) => s.screen))],
    ["copilots", "step1", "step2", "step3", "step4", "step5", "step6"],
  );
  assert.equal(essentials.some((s) => s.onlyWhenLiveEdit), true);
  assert.equal(essentialsDraft.some((s) => s.onlyWhenLiveEdit), false);
});

test("switching between full tour and essentials keeps current or nearest preceding stop", () => {
  const full = getVisibleTourSteps("full", { includeLiveEdit: true });
  const essentials = getVisibleTourSteps("essentials", { includeLiveEdit: true });

  const optionalStep = full.find((s) => s.id === "step1-goal");
  const idxInEssentials = resolveStepIndexAfterModeChange(essentials, optionalStep);
  assert.equal(essentials[idxInEssentials].id, "step1-name");

  const essentialStep = essentials[idxInEssentials];
  const idxInFull = resolveStepIndexAfterModeChange(full, essentialStep);
  assert.equal(full[idxInFull].id, "step1-name");
});

test("tooltip placement avoids overlapping the spotlight target and falls back cleanly when unmounted", () => {
  const placed = computeTooltipPlacement({
    targetRect: { left: 280, top: 220, width: 320, height: 64 },
    viewportWidth: 1440,
    viewportHeight: 900,
    tooltipWidth: 336,
    tooltipHeight: 220,
    bottomReserve: 84,
  });

  assert.notEqual(placed.side, "pin");
  assert.ok(placed.spotlight);
  assert.ok(placed.top + 220 <= 900 - 84);

  const ox = Math.max(
    0,
    Math.min(placed.left + 336, placed.spotlight.left + placed.spotlight.width) -
      Math.max(placed.left, placed.spotlight.left),
  );
  const oy = Math.max(
    0,
    Math.min(placed.top + 220, placed.spotlight.top + placed.spotlight.height) -
      Math.max(placed.top, placed.spotlight.top),
  );
  assert.equal(ox * oy, 0);

  const pinned = computeTooltipPlacement({
    targetRect: null,
    viewportWidth: 390,
    viewportHeight: 844,
    tooltipWidth: 336,
    tooltipHeight: 220,
    bottomReserve: 96,
  });
  assert.equal(pinned.side, "pin");
  assert.equal(pinned.spotlight, null);
});
