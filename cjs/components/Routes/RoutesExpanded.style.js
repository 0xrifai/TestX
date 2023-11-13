"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = exports.Container = exports.ScrollableContainer = exports.CollapseContainer = void 0;
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const AppContainer_1 = require("../AppContainer");
exports.CollapseContainer = (0, styles_1.styled)(material_1.Box)(({ theme }) => ({
    height: AppContainer_1.maxHeight,
    zIndex: 0,
}));
exports.ScrollableContainer = (0, styles_1.styled)(material_1.Box)({
    overflowY: 'auto',
    height: '100%',
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
});
exports.Container = (0, styles_1.styled)(material_1.ScopedCssBaseline)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    // overflow: 'auto',
    width: 436,
    maxHeight: AppContainer_1.maxHeight,
    // marginLeft: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    padding: '0 20px'
}));
exports.Header = (0, styles_1.styled)(material_1.Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    backdropFilter: 'blur(12px)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1.5, 0),
    position: 'sticky',
    top: 0,
    zIndex: 1200,
}));
