import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useWidgetEvents } from '../../hooks/';
import { WidgetEvent } from '../../types/events';
export const ContactSupportButton = ({ supportId, }) => {
    const { t } = useTranslation();
    const widgetEvents = useWidgetEvents();
    const handleClick = () => {
        if (!widgetEvents.all.has(WidgetEvent.RouteContactSupport)) {
            const url = 'https://discord.gg/lifi';
            const target = '_blank';
            const rel = 'nofollow noreferrer';
            window.open(url, target, rel);
        }
        else {
            widgetEvents.emit(WidgetEvent.RouteContactSupport, { supportId });
        }
    };
    return (_jsx(Button, { onClick: handleClick, fullWidth: true, children: t('button.contactSupport') }));
};
