import type { FormType } from '../../providers';
export declare const useTokenSelect: (formType: FormType, onClick?: () => void) => (tokenAddress: string, chainId?: number) => void;
