"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortenAddress = void 0;
const shortenAddress = (address) => address
    ? `${address.substring(0, 5)}...${address.substring(address.length - 4)}`
    : null;
exports.shortenAddress = shortenAddress;
