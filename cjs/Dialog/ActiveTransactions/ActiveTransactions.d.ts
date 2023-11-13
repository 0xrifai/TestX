interface ContentProps {
    toggleOpenTransac: () => void;
}
export declare const Content: ({ toggleOpenTransac }: ContentProps) => import("react/jsx-runtime").JSX.Element;
interface ActiveTransactionsProps {
    openTransac: boolean;
    toggleOpenTransac: () => void;
}
export declare function ActiveTransactions({ openTransac, toggleOpenTransac }: ActiveTransactionsProps): import("react/jsx-runtime").JSX.Element;
interface HeaderProps {
    toggleOpenTransac: () => void;
}
export declare function Header({ toggleOpenTransac }: HeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
