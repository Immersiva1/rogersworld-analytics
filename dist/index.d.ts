import createTagManagerProvider from './providers/tag-manager';
import createSegmentProvider from './providers/segment';
export declare const createTagManagerRecorder: (dataLayer: any[]) => {
    app: {
        saveContext: (sticky: import("./context").EventContext) => import("./context").EventContext;
        pages: {
            home: import("./recorder").RecorderMethod;
            auth: import("./recorder").RecorderMethod;
            payment: import("./recorder").RecorderMethod;
        };
        events: {
            auth: {
                signedUp: import("./recorder").RecorderMethod;
                loggedIn: import("./recorder").RecorderMethod;
                loggedOut: import("./recorder").RecorderMethod;
                canceled: import("./recorder").RecorderMethod;
                required: import("./recorder").RecorderMethod;
            };
            payment: {
                required: import("./recorder").RecorderMethod;
                completed: import("./recorder").RecorderMethod;
            };
            episode: {
                detailsViewed: import("./recorder").RecorderMethod;
            };
            device: {
                connected: import("./recorder").RecorderMethod;
                disconnected: import("./recorder").RecorderMethod;
            };
            room: {
                created: import("./recorder").RecorderMethod;
                exited: import("./recorder").RecorderMethod;
                backToAllEpisodes: import("./recorder").RecorderMethod;
                joined: import("./recorder").RecorderMethod;
                episodeStarted: import("./recorder").RecorderMethod;
                episodeCompleted: import("./recorder").RecorderMethod;
            };
            scene: {
                started: import("./recorder").RecorderMethod;
                completed: import("./recorder").RecorderMethod;
                skipped: import("./recorder").RecorderMethod;
                video: {
                    segmentStarted: import("./recorder").RecorderMethod;
                    segmentCompleted: import("./recorder").RecorderMethod;
                    autoplayPrevented: import("./recorder").RecorderMethod;
                    paused: import("./recorder").RecorderMethod;
                    resumed: import("./recorder").RecorderMethod;
                    looped: import("./recorder").RecorderMethod;
                };
                prompt: {
                    answered: import("./recorder").RecorderMethod;
                };
                multipleChoice: {
                    answered: import("./recorder").RecorderMethod;
                };
                buttonPrompt: {
                    pressed: import("./recorder").RecorderMethod;
                };
                timer: {
                    started: import("./recorder").RecorderMethod;
                    ended: import("./recorder").RecorderMethod;
                };
            };
        };
    };
};
export declare const createSegmentRecorder: () => {
    app: {
        saveContext: (sticky: import("./context").EventContext) => import("./context").EventContext;
        pages: {
            home: import("./recorder").RecorderMethod;
            auth: import("./recorder").RecorderMethod;
            payment: import("./recorder").RecorderMethod;
        };
        events: {
            auth: {
                signedUp: import("./recorder").RecorderMethod;
                loggedIn: import("./recorder").RecorderMethod;
                loggedOut: import("./recorder").RecorderMethod;
                canceled: import("./recorder").RecorderMethod;
                required: import("./recorder").RecorderMethod;
            };
            payment: {
                required: import("./recorder").RecorderMethod;
                completed: import("./recorder").RecorderMethod;
            };
            episode: {
                detailsViewed: import("./recorder").RecorderMethod;
            };
            device: {
                connected: import("./recorder").RecorderMethod;
                disconnected: import("./recorder").RecorderMethod;
            };
            room: {
                created: import("./recorder").RecorderMethod;
                exited: import("./recorder").RecorderMethod;
                backToAllEpisodes: import("./recorder").RecorderMethod;
                joined: import("./recorder").RecorderMethod;
                episodeStarted: import("./recorder").RecorderMethod;
                episodeCompleted: import("./recorder").RecorderMethod;
            };
            scene: {
                started: import("./recorder").RecorderMethod;
                completed: import("./recorder").RecorderMethod;
                skipped: import("./recorder").RecorderMethod;
                video: {
                    segmentStarted: import("./recorder").RecorderMethod;
                    segmentCompleted: import("./recorder").RecorderMethod;
                    autoplayPrevented: import("./recorder").RecorderMethod;
                    paused: import("./recorder").RecorderMethod;
                    resumed: import("./recorder").RecorderMethod;
                    looped: import("./recorder").RecorderMethod;
                };
                prompt: {
                    answered: import("./recorder").RecorderMethod;
                };
                multipleChoice: {
                    answered: import("./recorder").RecorderMethod;
                };
                buttonPrompt: {
                    pressed: import("./recorder").RecorderMethod;
                };
                timer: {
                    started: import("./recorder").RecorderMethod;
                    ended: import("./recorder").RecorderMethod;
                };
            };
        };
    };
};
export { createTagManagerProvider, createSegmentProvider };
