import type { ExcalidrawElement } from "./types";
import { isImageElement } from "./typeChecks";
import { shouldMaintainAspectRatio } from "../keys";

/** Opt-in via `element.customData.freeResize === true` (Mole). */
export const FREE_RESIZE_CUSTOM_DATA_KEY = "freeResize" as const;

export const hasFreeResizeOption = (
  element: ExcalidrawElement | null | undefined,
): boolean => {
  return element?.customData?.[FREE_RESIZE_CUSTOM_DATA_KEY] === true;
};

/**
 * Whether aspect ratio should stay locked during resize.
 *
 * - Normal shapes: Shift locks (default free).
 * - Images: locked by default, Shift unlocks.
 * - Images with `customData.freeResize`: same as shapes (default free, Shift locks).
 */
export const shouldLockAspectRatioWhileResizing = (
  elements: readonly ExcalidrawElement[],
  event: MouseEvent | KeyboardEvent,
): boolean => {
  const shiftLocks = shouldMaintainAspectRatio(event);
  const images = elements.filter(isImageElement);
  if (images.length === 0) {
    return shiftLocks;
  }
  if (images.every(hasFreeResizeOption)) {
    return shiftLocks;
  }
  return !shiftLocks;
};
