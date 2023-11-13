import mitt from 'mitt';
export const widgetEvents = mitt();
export const useWidgetEvents = () => {
    return widgetEvents;
};
