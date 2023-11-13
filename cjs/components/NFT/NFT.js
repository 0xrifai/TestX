"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFT = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const providers_1 = require("../../providers");
const NFTBase_1 = require("./NFTBase");
const NFT = ({ imageUrl, isLoading, collectionName, assetName, owner, token, contract, }) => {
    const { setValue } = (0, react_hook_form_1.useFormContext)();
    (0, react_1.useEffect)(() => {
        if (token) {
            setValue(providers_1.FormKey.ToChain, token.chainId, { shouldTouch: true });
            setValue(providers_1.FormKey.ToToken, token.address, { shouldTouch: true });
            setValue(providers_1.FormKey.ToAmount, token.amount, { shouldTouch: true });
        }
        if (contract) {
            setValue(providers_1.FormKey.ToContractAddress, contract.address, {
                shouldTouch: true,
            });
            setValue(providers_1.FormKey.ToContractCallData, contract.callData, {
                shouldTouch: true,
            });
            setValue(providers_1.FormKey.ToContractGasLimit, contract.gasLimit, {
                shouldTouch: true,
            });
        }
    }, [contract, setValue, token]);
    return ((0, jsx_runtime_1.jsx)(NFTBase_1.NFTBase, { isLoading: isLoading, imageUrl: imageUrl, collectionName: collectionName, assetName: assetName, owner: owner, token: token }));
};
exports.NFT = NFT;
