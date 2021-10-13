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

const getSegment = () => {
  return (globalThis as any).analytics;
};

export default function createSegmentProvider(): AnalyticsProvider {
  let didIdentifyUser = false;

  return {
    trackEvent: (eventType, context = {}) => {
      const segment = getSegment();

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
      const segment = getSegment();
      const partsArr = [parts].flat();

      segment.page(
        partsArr.slice(0, -1).join(JOIN_STR),
        partsArr.slice().pop() as string,
        computeContext(context)
      );
    },
  };
}
