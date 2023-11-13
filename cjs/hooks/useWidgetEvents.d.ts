import type { WidgetEvents } from '../types';
export declare const widgetEvents: import("mitt").Emitter<WidgetEvents>;
export declare const useWidgetEvents: () => import("mitt").Emitter<WidgetEvents>;
