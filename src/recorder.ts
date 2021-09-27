import { EventContext, mergeContext } from './context';
import { AnalyticsProvider } from './provider';

export interface Recorder {
  [key: string]: RecorderMethod | Recorder;
}

export interface RecorderMethod {
  (context?: EventContext): void;
  recordingName: string | string[];
  requiredContext: (keyof EventContext)[];
  optionalContext: (keyof EventContext)[];
}

export const createRecorderHelpers = (options: {
  prefix: string | string[];
  provider: AnalyticsProvider;
  stickyContext?: EventContext;
}) => {
  const {
    prefix,
    provider: { trackPageView, trackEvent },
    stickyContext = {},
  } = options;

  return {
    Page: createRecorderMethodFactory({
      prefix,
      stickyContext,
      track: trackPageView,
    }),

    Event: createRecorderMethodFactory({
      prefix,
      stickyContext,
      track: trackEvent,
    }),
  };
};

export const withComputedContext = (context: EventContext): EventContext => {
  return {
    ...context,
    acValue: JSON.stringify(context),
  };
};

export const createRecorderMethodFactory = (options: {
  prefix?: string | string[];
  track: (nameParts: string | string[], context?: EventContext) => any;
  stickyContext: EventContext;
}) => {
  const { prefix = [], track, stickyContext } = options;

  return (options: {
    name: string | string[];
    requiredContext?: (keyof EventContext)[];
    optionalContext?: (keyof EventContext)[];
  }): RecorderMethod => {
    const { name, requiredContext = [], optionalContext = [] } = options;
    const prefixedName = [prefix, name].flat();

    const method: RecorderMethod = Object.assign(
      (newContext = {}) => {
        const context = withComputedContext(
          mergeContext(
            stickyContext,
            newContext,
            requiredContext,
            optionalContext
          )
        );

        track(prefixedName, context);
      },
      {
        recordingName: prefixedName,
        requiredContext,
        optionalContext,
      }
    );

    return method;
  };
};
