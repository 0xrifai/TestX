"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasEnumFlag = void 0;
const hasEnumFlag = (flags, flag) => (flags & flag) === flag;
exports.hasEnumFlag = hasEnumFlag;
