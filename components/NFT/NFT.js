import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormKey } from '../../providers';
import { NFTBase } from './NFTBase';
export const NFT = ({ imageUrl, isLoading, collectionName, assetName, owner, token, contract, }) => {
    const { setValue } = useFormContext();
    useEffect(() => {
        if (token) {
            setValue(FormKey.ToChain, token.chainId, { shouldTouch: true });
            setValue(FormKey.ToToken, token.address, { shouldTouch: true });
            setValue(FormKey.ToAmount, token.amount, { shouldTouch: true });
        }
        if (contract) {
            setValue(FormKey.ToContractAddress, contract.address, {
                shouldTouch: true,
            });
            setValue(FormKey.ToContractCallData, contract.callData, {
                shouldTouch: true,
            });
            setValue(FormKey.ToContractGasLimit, contract.gasLimit, {
                shouldTouch: true,
            });
        }
    }, [contract, setValue, token]);
    return (_jsx(NFTBase, { isLoading: isLoading, imageUrl: imageUrl, collectionName: collectionName, assetName: assetName, owner: owner, token: token }));
};
