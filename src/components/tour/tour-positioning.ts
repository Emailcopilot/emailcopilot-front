export type TooltipSide = "right" | "left" | "bottom" | "top" | "pin";

export interface RectBox {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface TooltipPlacementInput {
  targetRect: RectBox | null;
  viewportWidth: number;
  viewportHeight: number;
  tooltipWidth: number;
  tooltipHeight: number;
  pad?: number;
  gap?: number;
  edge?: number;
  topReserve?: number;
  bottomReserve?: number;
}

export interface TooltipPlacementResult {
  side: TooltipSide;
  left: number;
  top: number;
  arrowOffset: number;
  spotlight: RectBox | null;
}

function clamp(value: number, min: number, max: number): number {
  if (max < min) return min;
  return Math.max(min, Math.min(value, max));
}

function overlapArea(
  aLeft: number,
  aTop: number,
  aWidth: number,
  aHeight: number,
  bLeft: number,
  bTop: number,
  bWidth: number,
  bHeight: number,
): number {
  const ox = Math.max(0, Math.min(aLeft + aWidth, bLeft + bWidth) - Math.max(aLeft, bLeft));
  const oy = Math.max(0, Math.min(aTop + aHeight, bTop + bHeight) - Math.max(aTop, bTop));
  return ox * oy;
}

/**
 * Places the tour tooltip adjacent to the spotlight without obscuring the
 * highlighted target or floating under the bottom progress dock. Falls back
 * to bottom-centered "pin" mode when no visible target is mounted.
 */
export function computeTooltipPlacement({
  targetRect,
  viewportWidth,
  viewportHeight,
  tooltipWidth,
  tooltipHeight,
  pad = 7,
  gap = 18,
  edge = 14,
  topReserve = 12,
  bottomReserve = 84,
}: TooltipPlacementInput): TooltipPlacementResult {
  const tw = Math.min(tooltipWidth, Math.max(240, viewportWidth - edge * 2));
  const minLeft = edge;
  const maxLeft = Math.max(edge, viewportWidth - tw - edge);
  const minTop = Math.max(edge, topReserve);
  const maxTop = Math.max(minTop, viewportHeight - tooltipHeight - bottomReserve);

  if (!targetRect || targetRect.width <= 0 || targetRect.height <= 0) {
    return {
      side: "pin",
      left: Math.max(edge, (viewportWidth - tw) / 2),
      top: maxTop,
      arrowOffset: 0,
      spotlight: null,
    };
  }

  const { left: x, top: y, width: w, height: h } = targetRect;
  const sx = x - pad;
  const sy = y - pad;
  const sw = w + pad * 2;
  const sh = h + pad * 2;

  const rawCandidates: Array<{ side: Exclude<TooltipSide, "pin">; left: number; top: number }> = [
    { side: "right", left: x + w + gap, top: y + h / 2 - tooltipHeight / 2 },
    { side: "left", left: x - gap - tw, top: y + h / 2 - tooltipHeight / 2 },
    { side: "bottom", left: x + w / 2 - tw / 2, top: y + h + gap },
    { side: "top", left: x + w / 2 - tw / 2, top: y - gap - tooltipHeight },
    { side: "right", left: x + w + gap, top: y },
    { side: "left", left: x - gap - tw, top: y },
    { side: "bottom", left: edge, top: y + h + gap },
    { side: "bottom", left: maxLeft, top: y + h + gap },
    { side: "top", left: edge, top: y - gap - tooltipHeight },
    { side: "top", left: maxLeft, top: y - gap - tooltipHeight },
  ];

  const evaluated = rawCandidates.map((candidate) => {
    const clampedLeft = clamp(candidate.left, minLeft, maxLeft);
    const clampedTop = clamp(candidate.top, minTop, maxTop);
    const overlap = overlapArea(
      clampedLeft,
      clampedTop,
      tw,
      tooltipHeight,
      sx,
      sy,
      sw,
      sh,
    );
    return {
      side: candidate.side,
      left: clampedLeft,
      top: clampedTop,
      overlap,
    };
  });

  const best =
    evaluated.find((c) => c.overlap === 0) ??
    evaluated.reduce((acc, next) => (next.overlap < acc.overlap ? next : acc));

  const arrowOffset =
    best.side === "left" || best.side === "right"
      ? clamp(y + h / 2 - best.top - 6, 16, Math.max(16, tooltipHeight - 28))
      : clamp(x + w / 2 - best.left - 6, 16, Math.max(16, tw - 28));

  return {
    side: best.side,
    left: best.left,
    top: best.top,
    arrowOffset,
    spotlight: {
      left: sx,
      top: sy,
      width: sw,
      height: sh,
    },
  };
}
