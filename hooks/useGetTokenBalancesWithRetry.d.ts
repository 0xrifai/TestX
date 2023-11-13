import type { Provider } from '@ethersproject/providers';
import type { Token, TokenAmount } from '@lifi/sdk';
export declare const useGetTokenBalancesWithRetry: (provider?: Provider) => (accountAddress: string, tokens: Token[], depth?: number) => Promise<TokenAmount[] | undefined>;
