"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInitializer = void 0;
const sdk_1 = require("@lifi/sdk");
const react_1 = require("react");
const version_1 = require("../config/version");
const useTools_1 = require("./useTools");
let checkedPackageUpdates = false;
const useInitializer = () => {
    (0, useTools_1.useTools)();
    (0, react_1.useEffect)(() => {
        if (!checkedPackageUpdates) {
            checkedPackageUpdates = true;
            (0, sdk_1.checkPackageUpdates)(version_1.name, version_1.version);
        }
    }, []);
};
exports.useInitializer = useInitializer;
