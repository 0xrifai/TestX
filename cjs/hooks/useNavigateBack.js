"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNavigateBack = void 0;
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const useNavigateBack = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const navigateBack = (0, react_1.useCallback)(() => {
        // TODO: find a better router with nested memory routers support
        // https://github.com/remix-run/react-router/pull/9112
        // https://github.com/remix-run/react-router/discussions/9601
        //
        // if (window.history.length > 2) {
        navigate(-1);
        // } else {
        //   navigate(
        //     window.location.pathname.substring(
        //       0,
        //       window.location.pathname.lastIndexOf('/'),
        //     ) || '/',
        //     { replace: true },
        //   );
        // }
    }, [navigate]);
    return { navigateBack, navigate };
};
exports.useNavigateBack = useNavigateBack;
