import type { Signer } from '@ethersproject/abstract-signer';
import type { FC, PropsWithChildren } from 'react';
import type { WalletContextProps } from './types';
export declare const useWallet: () => WalletContextProps;
export declare const WalletProvider: FC<PropsWithChildren>;
export declare const extractAccountFromSigner: (signer?: Signer) => Promise<{
    address: string | undefined;
    isActive: boolean;
    signer: Signer | undefined;
    chainId: number | undefined;
} | {
    address?: undefined;
    isActive?: undefined;
    signer?: undefined;
    chainId?: undefined;
}>;
