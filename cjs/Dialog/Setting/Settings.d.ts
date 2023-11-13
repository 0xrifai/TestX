import type { SxProps, Theme } from '@mui/material';
interface ContentProps {
    toggleDialog: () => void;
}
export declare function Content({ toggleDialog }: ContentProps): import("react/jsx-runtime").JSX.Element;
interface HeaderProps {
    toggleDialog: () => void;
    onBack?: () => void;
    sx?: SxProps<Theme>;
    screen: "base" | "sBridges" | "sExchanges";
}
export declare function Header({ toggleDialog, onBack, sx, screen }: HeaderProps): import("react/jsx-runtime").JSX.Element;
export declare const Settings: () => import("react/jsx-runtime").JSX.Element;
export {};
