"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTokenPrice = exports.formatInputAmount = exports.formatSlippage = exports.formatTokenAmount = void 0;
const big_js_1 = require("big.js");
// JavaScript numbers use exponential notation for positive exponents of 21 and above. We need more.
big_js_1.default.PE = 42;
// JavaScript numbers use exponential notation for negative exponents of -7 and below. We need more.
big_js_1.default.NE = -42;
/**
 * Format token amount to at least 4 decimals.
 * @param amount amount to format.
 * @returns formatted amount.
 */
const formatTokenAmount = (amount = '0', decimals = 0, decimalPlaces = 3) => {
    let shiftedAmount = amount;
    if (decimals) {
        shiftedAmount = (Number(amount) / 10 ** decimals).toString();
    }
    const parsedAmount = parseFloat(shiftedAmount);
    if (parsedAmount === 0 || isNaN(Number(shiftedAmount))) {
        return '0';
    }
    const absAmount = Math.abs(parsedAmount);
    while (absAmount < 1 / 10 ** decimalPlaces) {
        decimalPlaces++;
    }
    return parsedAmount.toFixed(decimalPlaces + 1);
};
exports.formatTokenAmount = formatTokenAmount;
const formatSlippage = (slippage = '', defaultValue = '', returnInitial = false) => {
    if (!slippage) {
        return slippage;
    }
    const parsedSlippage = parseFloat(slippage);
    if (isNaN(Number(slippage)) && !isNaN(parsedSlippage)) {
        return parsedSlippage.toString();
    }
    if (isNaN(parsedSlippage)) {
        return defaultValue;
    }
    if (parsedSlippage > 100) {
        return '100';
    }
    if (parsedSlippage < 0) {
        return Math.abs(parsedSlippage).toString();
    }
    if (returnInitial) {
        return slippage;
    }
    return parsedSlippage.toString();
};
exports.formatSlippage = formatSlippage;
const formatInputAmount = (amount, decimals = null, returnInitial = false) => {
    if (!amount) {
        return amount;
    }
    let formattedAmount = amount.replaceAll(',', '.');
    if (formattedAmount.startsWith('.')) {
        formattedAmount = '0' + formattedAmount;
    }
    const parsedAmount = parseFloat(formattedAmount);
    if (isNaN(Number(formattedAmount)) && !isNaN(parsedAmount)) {
        return parsedAmount.toString();
    }
    if (isNaN(Math.abs(Number(formattedAmount)))) {
        return '';
    }
    if (returnInitial) {
        return formattedAmount;
    }
    let [integer, fraction = ''] = formattedAmount.split('.');
    if (decimals !== null && fraction.length > decimals) {
        fraction = fraction.slice(0, decimals);
    }
    integer = integer.replace(/^0+|-/, '');
    fraction = fraction.replace(/(0+)$/, '');
    return `${integer || (fraction ? '0' : '')}${fraction ? `.${fraction}` : ''}`;
};
exports.formatInputAmount = formatInputAmount;
const formatTokenPrice = (amount, price) => {
    if (!amount || !price) {
        return 0;
    }
    if (isNaN(Number(amount)) || isNaN(Number(price))) {
        return 0;
    }
    return parseFloat(amount) * parseFloat(price);
};
exports.formatTokenPrice = formatTokenPrice;
