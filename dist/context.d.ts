export interface PageViewContext {
}
export interface EventContext {
    userId?: string;
    userEmail?: string;
    userName?: string;
    roomId?: string;
    deviceId?: string;
    episodeId?: string;
    sceneId?: string;
    playerId?: string;
    playerAge?: number;
    videoId?: string;
    answer?: string;
    timestamp?: number;
    duration?: number;
    asGroup?: boolean;
    sceneIndex?: number;
    scenesRemaining?: number;
    sceneProgress?: number;
}
export declare const mergeContext: (stickyContext: EventContext, newContext?: EventContext, requiredKeys?: (keyof EventContext)[], optionalKeys?: (keyof EventContext)[]) => EventContext;
