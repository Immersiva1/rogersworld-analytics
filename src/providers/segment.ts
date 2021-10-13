import { AnalyticsProvider } from '../provider';
import { EventContext, PageViewContext } from '../context';

interface SegmentContext extends EventContext {
  email?: string;
  acValue: string;
}

const JOIN_STR = ' _ ';

export interface Segment extends Array<any> {
  identify: (
    userId: string,
    traits: {
      [key: string]: any;
    }
  ) => void;

  page: (
    category: string,
    name: string | null,
    properties?: PageViewContext
  ) => void;

  track: (event: string, context: EventContext) => void;
}

export const computeContext = (context: EventContext): SegmentContext => {
  const withEmail = {
    ...context,
    email: context.userEmail,
  };

  return {
    ...withEmail,
    acValue: JSON.stringify(withEmail),
  };
};

export default function createSegmentProvider(
  segment: Segment = (globalThis as any).analytics
): AnalyticsProvider {
  let didIdentifyUser = false;

  return {
    trackEvent: (eventType, context = {}) => {
      if (context.userId && !didIdentifyUser) {
        segment.identify(context.userId, {
          email: context.userEmail,
          name: context.userName,
        });

        didIdentifyUser = true;
      }

      segment.track([eventType].flat().join(JOIN_STR), computeContext(context));
    },

    trackPageView: (parts, context = {}) => {
      const partsArr = [parts].flat();

      segment.page(
        partsArr.slice(0, -1).join(JOIN_STR),
        partsArr.slice().pop() as string,
        computeContext(context)
      );
    },
  };
}
