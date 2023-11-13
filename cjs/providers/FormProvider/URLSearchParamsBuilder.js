"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLSearchParamsBuilder = void 0;
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const react_router_dom_1 = require("react-router-dom");
const types_1 = require("./types");
const formValueKeys = [
    types_1.FormKey.FromAmount,
    types_1.FormKey.FromChain,
    types_1.FormKey.FromToken,
    types_1.FormKey.ToAddress,
    types_1.FormKey.ToChain,
    types_1.FormKey.ToToken,
];
const URLSearchParamsBuilder = () => {
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const { 
    // Have to use touchedFields, because default values are not considered dirty
    touchedFields: { ...touchedFields }, } = (0, react_hook_form_1.useFormState)();
    const values = (0, react_hook_form_1.useWatch)({ name: formValueKeys });
    (0, react_1.useEffect)(() => {
        const url = new URL(window.location);
        formValueKeys.forEach((key, index) => {
            if (touchedFields[key] && values[index]) {
                url.searchParams.set(key, values[index]);
            }
            else if (url.searchParams.has(key) && !values[index]) {
                url.searchParams.delete(key);
            }
        });
        url.searchParams.sort();
        window.history.replaceState(window.history.state, '', url);
    }, [pathname, touchedFields, values]);
    return null;
};
exports.URLSearchParamsBuilder = URLSearchParamsBuilder;
