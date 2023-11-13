"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactSupportButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const hooks_1 = require("../../hooks/");
const events_1 = require("../../types/events");
const ContactSupportButton = ({ supportId, }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const widgetEvents = (0, hooks_1.useWidgetEvents)();
    const handleClick = () => {
        if (!widgetEvents.all.has(events_1.WidgetEvent.RouteContactSupport)) {
            const url = 'https://discord.gg/lifi';
            const target = '_blank';
            const rel = 'nofollow noreferrer';
            window.open(url, target, rel);
        }
        else {
            widgetEvents.emit(events_1.WidgetEvent.RouteContactSupport, { supportId });
        }
    };
    return ((0, jsx_runtime_1.jsx)(material_1.Button, { onClick: handleClick, fullWidth: true, children: t('button.contactSupport') }));
};
exports.ContactSupportButton = ContactSupportButton;
