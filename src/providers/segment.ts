import { AnalyticsProvider } from '../provider';
import { EventContext, PageViewContext } from '../context';

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

export default function createSegmentProvider(
  segment: Segment
): AnalyticsProvider {
  return {
    trackEvent: (eventType, context = {}) => {
      segment.track([eventType].flat().join(' / '), context);
    },

    trackPageView: (parts, context = {}) => {
      const partsArr = [parts].flat();

      segment.page(
        partsArr.slice(0, -1).join(' / '),
        partsArr.slice().pop() as string,
        context
      );
    },
  };
}

export const joinName = (parts: string | string[]) => {
  return [parts].flat().join(' / ');
};
