import { EventContext } from '../context';
import { AnalyticsProvider } from '../provider';
import { createRecorderHelpers, Recorder } from '../recorder';

const userInfo: (keyof EventContext)[] = ['userId', 'userEmail', 'userName'];

export const createAppAnalyticsRecorder = (
  provider: AnalyticsProvider
): Recorder => {
  const { Page, Event } = createRecorderHelpers({
    provider,
    prefix: 'Web App',
  });

  return {
    pages: {
      home: Page({
        name: 'Home',
      }),
      auth: Page({
        name: 'Auth',
      }),
      payment: Page({
        name: 'Payment',
        requiredContext: userInfo,
      }),
    },

    events: {
      auth: {
        signedUp: Event({
          name: ['Auth', 'Signed Up'],
          requiredContext: userInfo,
        }),
        loggedIn: Event({
          name: ['Auth', 'Logged In'],
          requiredContext: userInfo,
        }),
        loggedOut: Event({
          name: ['Auth', 'Logged Out'],
          requiredContext: userInfo,
        }),
        canceled: Event({
          name: ['Auth', 'Canceled'],
        }),
        required: Event({
          name: ['Auth', 'Required'],
          requiredContext: ['episodeId'],
        }),
      },

      payment: {
        required: Event({
          name: ['Payment', 'Required'],
          requiredContext: userInfo,
        }),
        completed: Event({
          name: ['Payment', 'Completed'],
          requiredContext: userInfo,
        }),
      },

      episode: {
        detailsViewed: Event({
          name: ['Episode', 'Details Viewed'],
          requiredContext: ['episodeId'],
          optionalContext: userInfo,
        }),
      },

      device: {
        connected: Event({
          name: ['Device', 'Connected'],
          requiredContext: ['roomId', 'episodeId', 'deviceId'],
        }),
        disconnected: Event({
          name: ['Device', 'Disconnected'],
          requiredContext: ['roomId', 'episodeId', 'deviceId'],
        }),
      },

      room: {
        created: Event({
          name: ['Room', 'Created'],
          requiredContext: ['roomId', 'episodeId', ...userInfo],
        }),
        exited: Event({
          name: ['Room', 'Exited'],
          requiredContext: ['roomId', 'episodeId', ...userInfo],
        }),
        backToAllEpisodes: Event({
          name: ['Room', 'Back to All Episodes'],
          requiredContext: ['roomId', 'episodeId', ...userInfo],
        }),
        joined: Event({
          name: ['Room', 'Joined'],
          requiredContext: ['roomId', 'episodeId', 'deviceId', 'playerId'],
        }),
        episodeStarted: Event({
          name: ['Room', 'Episode Started'],
          requiredContext: ['roomId', 'episodeId', ...userInfo],
        }),
        episodeCompleted: Event({
          name: ['Room', 'Episode Completed'],
          requiredContext: ['roomId', 'episodeId', ...userInfo],
        }),
      },

      scene: {
        started: Event({
          name: ['Scene', 'Started'],
          requiredContext: ['sceneId', 'roomId', 'episodeId'],
        }),
        completed: Event({
          name: ['Scene', 'Completed'],
          requiredContext: ['sceneId', 'roomId', 'episodeId'],
        }),
        skipped: Event({
          name: ['Scene', 'Skipped'],
          requiredContext: ['sceneId', 'roomId', 'episodeId'],
        }),

        video: {
          segmentStarted: Event({
            name: ['Scene', 'Video', 'Segment Started'],
            requiredContext: [
              'roomId',
              'episodeId',
              'sceneId',
              'videoId',
              'timestamp',
            ],
          }),
          segmentCompleted: Event({
            name: ['Scene', 'Video', 'Segment Completed'],
            requiredContext: [
              'roomId',
              'episodeId',
              'sceneId',
              'videoId',
              'timestamp',
            ],
          }),
          autoplayPrevented: Event({
            name: ['Scene', 'Video', 'Autoplay Prevented'],
            requiredContext: ['roomId', 'episodeId', 'sceneId', 'videoId'],
          }),
          paused: Event({
            name: ['Scene', 'Video', 'Paused'],
            requiredContext: [
              'roomId',
              'episodeId',
              'sceneId',
              'videoId',
              'timestamp',
            ],
          }),
          resumed: Event({
            name: ['Scene', 'Video', 'Resumed'],
            requiredContext: [
              'roomId',
              'episodeId',
              'sceneId',
              'sceneIndex',
              'scenesRemaining',
              'sceneProgress',
              'videoId',
              'timestamp',
            ],
          }),
          looped: Event({
            name: ['Scene', 'Video', 'Looped'],
            requiredContext: ['roomId', 'episodeId', 'sceneId', 'videoId'],
          }),
        },

        prompt: {
          answered: Event({
            name: ['Scene', 'Prompt', 'Answered'],
            requiredContext: [
              'roomId',
              'episodeId',
              'sceneId',
              'answer',
              'playerId',
              'deviceId',
            ],
          }),
        },

        multipleChoice: {
          answered: Event({
            name: ['Scene', 'Multiple Choice', 'Answered'],
            requiredContext: [
              'roomId',
              'episodeId',
              'sceneId',
              'answer',
              'playerId',
              'deviceId',
            ],
          }),
        },

        buttonPrompt: {
          pressed: Event({
            name: ['Scene', 'Button Prompt', 'Pressed'],
            requiredContext: [
              'roomId',
              'episodeId',
              'sceneId',
              'playerId',
              'deviceId',
            ],
          }),
        },

        timer: {
          started: Event({
            name: ['Scene', 'Timer', 'Started'],
            requiredContext: ['roomId', 'episodeId', 'sceneId'],
          }),
          ended: Event({
            name: ['Scene', 'Timer', 'Ended'],
            requiredContext: ['roomId', 'episodeId', 'sceneId'],
          }),
        },
      },
    },
  };
};
