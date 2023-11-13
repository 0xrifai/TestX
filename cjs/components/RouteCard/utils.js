"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFeeCostsBreakdown = exports.getGasCostsBreakdown = void 0;
const big_js_1 = require("big.js");
const getGasCostsBreakdown = (route) => {
    return Object.values(route.steps.reduce((groupedGasCosts, step) => {
        if (step.estimate.gasCosts?.length) {
            const { token } = step.estimate.gasCosts[0];
            const gasCostAmount = step.estimate.gasCosts
                .reduce((amount, gasCost) => amount.plus((0, big_js_1.default)(gasCost.amount || 0)), (0, big_js_1.default)(0))
                .div(10 ** token.decimals);
            const gasCostAmountUSD = step.estimate.gasCosts.reduce((amount, gasCost) => amount + parseFloat(gasCost.amountUSD || '0'), 0);
            const groupedGasCost = groupedGasCosts[token.chainId];
            const amount = groupedGasCost
                ? groupedGasCost.amount.plus(gasCostAmount)
                : gasCostAmount;
            const amountUSD = groupedGasCost
                ? groupedGasCost.amountUSD + gasCostAmountUSD
                : gasCostAmountUSD;
            groupedGasCosts[token.chainId] = {
                amount,
                amountUSD,
                token,
            };
            return groupedGasCosts;
        }
        return groupedGasCosts;
    }, {}));
};
exports.getGasCostsBreakdown = getGasCostsBreakdown;
const getFeeCostsBreakdown = (route, included) => {
    return Object.values(route.steps.reduce((groupedFeeCosts, step) => {
        let feeCosts = step.estimate.feeCosts;
        if (typeof included === 'boolean') {
            feeCosts = feeCosts?.filter((feeCost) => feeCost.included === included);
        }
        if (feeCosts?.length) {
            const { token } = feeCosts[0];
            const feeCostAmount = feeCosts
                .reduce((amount, feeCost) => amount.plus((0, big_js_1.default)(feeCost.amount || 0)), (0, big_js_1.default)(0))
                .div(10 ** token.decimals);
            const feeCostAmountUSD = feeCosts.reduce((amount, feeCost) => amount + parseFloat(feeCost.amountUSD || '0'), 0);
            const groupedFeeCost = groupedFeeCosts[token.chainId];
            const amount = groupedFeeCost
                ? groupedFeeCost.amount.plus(feeCostAmount)
                : feeCostAmount;
            const amountUSD = groupedFeeCost
                ? groupedFeeCost.amountUSD + feeCostAmountUSD
                : feeCostAmountUSD;
            groupedFeeCosts[token.chainId] = {
                amount,
                amountUSD,
                token,
            };
            return groupedFeeCosts;
        }
        return groupedFeeCosts;
    }, {}));
};
exports.getFeeCostsBreakdown = getFeeCostsBreakdown;
