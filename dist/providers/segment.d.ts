import { AnalyticsProvider } from '../provider';
import { EventContext, PageViewContext } from '../context';
interface SegmentContext extends EventContext {
    email?: string;
    acValue: string;
}
export interface Segment extends Array<any> {
    identify: (userId: string, traits: {
        [key: string]: any;
    }) => void;
    page: (category: string, name: string | null, properties?: PageViewContext) => void;
    track: (event: string, context: EventContext) => void;
}
export declare const computeContext: (context: EventContext) => SegmentContext;
export default function createSegmentProvider(): AnalyticsProvider;
export {};
