import { createAppAnalyticsRecorder } from './recorders/app';
import createTagManagerProvider from './providers/tag-manager';
import createSegmentProvider, { Segment } from './providers/segment';

export const createTagManagerRecorder = (dataLayer: any[]) => {
  const gtm = createTagManagerProvider(dataLayer);

  return {
    app: createAppAnalyticsRecorder(gtm),
  };
};

export const createSegmentRecorder = () => {
  return {
    app: createAppAnalyticsRecorder(createSegmentProvider()),
  };
};

export { createTagManagerProvider, createSegmentProvider };
