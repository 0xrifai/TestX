"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDefault = exports.App = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AppDrawer_1 = require("./AppDrawer");
const AppProvider_1 = require("./AppProvider");
const AppRoutes_1 = require("./AppRoutes");
const AppContainer_1 = require("./components/AppContainer");
const Header_1 = require("./components/Header");
const Initializer_1 = require("./components/Initializer");
const Routes_1 = require("./components/Routes");
const hooks_1 = require("./hooks");
const providers_1 = require("./providers");
const utils_1 = require("./utils");
const ActiveTransactions_1 = require("./Dialog/ActiveTransactions/ActiveTransactions");
// eslint-disable-next-line react/display-name
exports.App = (0, react_1.forwardRef)(({ elementRef, open, integrator, ...other }, ref) => {
    const config = (0, react_1.useMemo)(() => ({ integrator, ...other, ...other.config }), [integrator, other]);
    return config?.variant !== 'drawer' ? ((0, jsx_runtime_1.jsx)(AppProvider_1.AppProvider, { config: config, children: (0, jsx_runtime_1.jsx)(exports.AppDefault, {}) })) : ((0, jsx_runtime_1.jsx)(AppDrawer_1.AppDrawer, { ref: ref, elementRef: elementRef, integrator: integrator, config: config, open: open }));
});
const AppDefault = () => {
    const { elementId } = (0, providers_1.useWidgetConfig)();
    const expandable = (0, hooks_1.useExpandableVariant)();
    const [openTransac, setOpenTransac] = react_1.default.useState(false);
    const toggleOpenTransac = (0, react_1.useCallback)(() => {
        setOpenTransac((openTransac) => !openTransac);
    }, []);
    return ((0, jsx_runtime_1.jsxs)(AppContainer_1.AppExpandedContainer, { id: (0, utils_1.createElementId)(utils_1.ElementId.AppExpandedContainer, elementId), children: [(0, jsx_runtime_1.jsx)(ActiveTransactions_1.ActiveTransactions, { openTransac: openTransac, toggleOpenTransac: toggleOpenTransac }), (0, jsx_runtime_1.jsxs)(AppContainer_1.AppContainer, { children: [(0, jsx_runtime_1.jsx)(Header_1.Header, {}), (0, jsx_runtime_1.jsx)(AppContainer_1.FlexContainer, { disableGutters: true, children: (0, jsx_runtime_1.jsx)(AppRoutes_1.AppRoutes, { toggleOpenTransac: toggleOpenTransac }) }), (0, jsx_runtime_1.jsx)(Initializer_1.Initializer, {})] }), expandable ? (0, jsx_runtime_1.jsx)(Routes_1.RoutesExpanded, {}) : null] }));
};
exports.AppDefault = AppDefault;
