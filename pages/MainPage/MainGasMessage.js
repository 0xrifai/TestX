import { jsx as _jsx } from "react/jsx-runtime";
import { GasMessage } from '../../components/GasMessage';
import { useRoutes } from '../../hooks';
export const MainGasMessage = (props) => {
    const { routes } = useRoutes();
    const currentRoute = routes?.[0];
    return _jsx(GasMessage, { route: currentRoute, ...props });
};
