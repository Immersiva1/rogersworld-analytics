export interface PageViewContext {}

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

export const mergeContext = (
  stickyContext: EventContext,
  newContext: EventContext = {},
  requiredKeys: (keyof EventContext)[] = [],
  optionalKeys: (keyof EventContext)[] = []
) => {
  const mergedContext: EventContext = {};

  requiredKeys.forEach((key) => {
    const value = newContext[key] ?? stickyContext[key];

    if (value === undefined) {
      throw new Error('Required context missing: ' + key);
    }

    (mergedContext[key] as any) = value;
  });

  optionalKeys.forEach((key) => {
    (mergedContext[key] as any) = newContext[key] ?? stickyContext[key];
  });

  return mergedContext;
};
