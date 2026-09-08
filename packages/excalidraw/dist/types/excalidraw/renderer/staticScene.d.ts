import type { StaticSceneRenderConfig } from "../scene/types";
/** MoleTown: fixed-page bridge set by the host app (kite collab-canvas). */
type MoleCanvasPageBridge = {
    mode: "infinite" | "fixed";
    width: number;
    height: number;
};
declare global {
    interface Window {
        __MOLE_CANVAS_PAGE__?: MoleCanvasPageBridge | null;
    }
}
/** throttled to animation framerate */
export declare const renderStaticSceneThrottled: {
    (config: StaticSceneRenderConfig): void;
    flush(): void;
    cancel(): void;
};
/**
 * Static scene is the non-ui canvas where we render elements.
 */
export declare const renderStaticScene: (renderConfig: StaticSceneRenderConfig, throttle?: boolean) => void;
export {};
