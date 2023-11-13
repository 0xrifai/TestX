import { jsx as _jsx } from "react/jsx-runtime";
import { Divider } from '@mui/material';
import { Container } from './StepDivider.style';
export const StepDivider = () => {
    return (_jsx(Container, { children: _jsx(Divider, { orientation: "vertical", flexItem: true }) }));
};
