export interface PageViewContext {}

export interface EventContext {
  userId?: string;
  roomId?: string;
  deviceId?: string;
  episodeId?: string;
  sceneId?: string;
  playerId?: string;
  videoId?: string;
  answer?: string;
}

export type EventContextSubset<TKeys> = TKeys extends keyof EventContext
  ? { [key in TKeys]: NonNullable<EventContext[key]> }
  : undefined;

export const mergeContext = (
  stickyContext: EventContext,
  newContext: EventContext = {},
  requiredKeys: (keyof EventContext)[] = [],
  optionalKeys: (keyof EventContext)[] = []
) => {
  const mergedContext: EventContext = {};

  requiredKeys.forEach((key) => {
    const value = newContext[key] || stickyContext[key];

    if (value === undefined) {
      throw new Error('Required context missing: ' + key);
    }

    mergedContext[key] = value;
  });

  optionalKeys.forEach((key) => {
    mergedContext[key] = newContext[key] || stickyContext[key];
  });

  return mergedContext;
};
