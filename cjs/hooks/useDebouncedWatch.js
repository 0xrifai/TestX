"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDebouncedWatch = void 0;
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const useDebouncedWatch = (name, delay) => {
    const watchedValue = (0, react_hook_form_1.useWatch)({
        name,
    });
    const [debouncedValue, setDebouncedValue] = (0, react_1.useState)(watchedValue);
    const debouncedValueRef = (0, react_1.useRef)();
    const isMounted = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(() => {
        if (isMounted.current) {
            const hasWatchedValue = Array.isArray(watchedValue)
                ? watchedValue.some((value) => value)
                : Boolean(watchedValue);
            if (hasWatchedValue) {
                const handler = setTimeout(() => {
                    setDebouncedValue(watchedValue);
                }, delay);
                return () => clearTimeout(handler);
            }
            debouncedValueRef.current = watchedValue;
            setDebouncedValue(watchedValue);
            return undefined;
        }
        isMounted.current = true;
        return undefined;
    }, [delay, watchedValue]);
    return debouncedValue;
};
exports.useDebouncedWatch = useDebouncedWatch;
