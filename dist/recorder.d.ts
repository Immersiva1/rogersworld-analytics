import { EventContext } from './context';
import { AnalyticsProvider } from './provider';
export interface Recorder {
    [key: string]: RecorderMethod | Recorder;
}
export interface RecorderMethod {
    (context?: EventContext): void;
    recordingName: string | string[];
    requiredContext: (keyof EventContext)[];
    optionalContext: (keyof EventContext)[];
}
export declare const createRecorderHelpers: (options: {
    prefix: string | string[];
    provider: AnalyticsProvider;
    stickyContext?: EventContext;
}) => {
    saveContext: (sticky: EventContext) => EventContext;
    Page: (options: {
        name: string | string[];
        requiredContext?: (keyof EventContext)[];
        optionalContext?: (keyof EventContext)[];
    }) => RecorderMethod;
    Event: (options: {
        name: string | string[];
        requiredContext?: (keyof EventContext)[];
        optionalContext?: (keyof EventContext)[];
    }) => RecorderMethod;
};
export declare const createRecorderMethodFactory: (options: {
    prefix?: string | string[];
    track: (nameParts: string | string[], context?: EventContext) => any;
    stickyContext: EventContext;
}) => (options: {
    name: string | string[];
    requiredContext?: (keyof EventContext)[];
    optionalContext?: (keyof EventContext)[];
}) => RecorderMethod;
