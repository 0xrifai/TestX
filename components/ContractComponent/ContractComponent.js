import { jsx as _jsx } from "react/jsx-runtime";
import { Card } from '../Card';
export const ContractComponent = ({ children, ...props }) => {
    if (!children) {
        return null;
    }
    return _jsx(Card, { ...props, children: children });
};
