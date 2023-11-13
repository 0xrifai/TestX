import { jsx as _jsx } from "react/jsx-runtime";
import { ChainOrderStoreProvider } from './chains';
import { HeaderStoreProvider } from './header';
import { RouteExecutionStoreProvider } from './routes';
import { SplitSubvariantStoreProvider } from './settings';
export const StoreProvider = ({ children, config, }) => {
    return (_jsx(SplitSubvariantStoreProvider, { state: config.subvariant === 'split'
            ? config.subvariantOptions || 'swap'
            : undefined, children: _jsx(HeaderStoreProvider, { namePrefix: config?.keyPrefix, children: _jsx(ChainOrderStoreProvider, { namePrefix: config?.keyPrefix, children: _jsx(RouteExecutionStoreProvider, { namePrefix: config?.keyPrefix, children: children }) }) }) }));
};
