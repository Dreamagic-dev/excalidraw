import type { ExcalidrawElement } from "./types";
/** Opt-in via `element.customData.freeResize === true` (Mole). */
export declare const FREE_RESIZE_CUSTOM_DATA_KEY: "freeResize";
export declare const hasFreeResizeOption: (element: ExcalidrawElement | null | undefined) => boolean;
/**
 * Whether aspect ratio should stay locked during resize.
 *
 * - Normal shapes: Shift locks (default free).
 * - Images: locked by default, Shift unlocks.
 * - Images with `customData.freeResize`: same as shapes (default free, Shift locks).
 */
export declare const shouldLockAspectRatioWhileResizing: (elements: readonly ExcalidrawElement[], event: MouseEvent | KeyboardEvent) => boolean;
