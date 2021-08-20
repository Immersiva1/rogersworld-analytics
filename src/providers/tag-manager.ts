import { AnalyticsProvider } from '../provider';
import { EventContext, PageViewContext } from '../context';

export default function createTagManagerProvider(
  dataLayer: any[] = []
): AnalyticsProvider {
  return {
    trackEvent: (eventType: string | string[], context: EventContext = {}) => {
      dataLayer.push({
        event: joinName(eventType),
        ...context,
      });
    },

    trackPageView: (
      pageCategory: string | string[],
      context: PageViewContext = {}
    ) => {
      dataLayer.push({
        pageCategory: joinName(pageCategory),
        ...context,
      });
    },
  };
}

export const joinName = (parts: string | string[]) => {
  return [parts].flat().join(' / ');
};
