"use client";

import type { RectBox, TooltipSide } from "./tour-positioning";
import { KIND_THEME, type TourKind } from "./tour-types";

export function TourSpotlight({
  spotlight,
  side,
  kind,
}: {
  spotlight: RectBox | null;
  side: TooltipSide;
  kind: TourKind;
}) {
  const theme = KIND_THEME[kind];

  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none overflow-hidden z-[70]"
    >
      {side === "pin" || !spotlight ? (
        <div className="fixed inset-0 bg-slate-900/45 transition-opacity duration-200" />
      ) : (
        <div
          className="fixed rounded-[10px] transition-[left,top,width,height,box-shadow] duration-300 ease-out motion-reduce:transition-none"
          style={{
            left: spotlight.left,
            top: spotlight.top,
            width: spotlight.width,
            height: spotlight.height,
            boxShadow: `0 0 0 9999px rgba(15, 23, 42, 0.44), 0 0 0 3px ${theme.highlight}, 0 0 0 9px ${theme.halo}`,
          }}
        />
      )}
    </div>
  );
}
