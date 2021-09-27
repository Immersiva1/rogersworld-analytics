import createTagManagerProvider from './providers/tag-manager';
import TagManagerProvider from './providers/tag-manager';
import SegmentProvider, { Segment } from './providers/segment';
import { createAppAnalyticsRecorder } from './recorders/app';
import createSegmentProvider from './providers/segment';

export * from './recorder';
export * from './recorders/app';

export const createTagManagerRecorder = (dataLayer: any[]) => {
  const gtm = createTagManagerProvider(dataLayer);

  return {
    app: createAppAnalyticsRecorder(gtm),
  };
};

export const createSegmentRecorder = (segment: Segment) => {
  return {
    app: createAppAnalyticsRecorder(createSegmentProvider(segment)),
  };
};

export { TagManagerProvider, SegmentProvider };
