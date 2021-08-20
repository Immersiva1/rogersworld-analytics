import createTagManagerProvider from './providers/tag-manager';
import TagManagerProvider from './providers/tag-manager';
import { createAppAnalyticsRecorder } from './recorders/app';

export * from './recorders/app';

export const createTagManagerRecorder = (dataLayer: any[]) => {
  const gtm = createTagManagerProvider(dataLayer);

  return {
    app: createAppAnalyticsRecorder(gtm),
  };
};

export { TagManagerProvider };
