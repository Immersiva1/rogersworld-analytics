import { EventContext, EventContextSubset, PageViewContext } from './context';

export interface AnalyticsProvider {
  trackEvent(eventType: string | string[], context?: EventContext): void;

  trackPageView(
    pageCategory: string | string[],
    context?: PageViewContext
  ): void;
}
