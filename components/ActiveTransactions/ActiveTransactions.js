import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useWallet } from '../../providers';
import { useExecutingRoutesIds } from '../../stores';
import { Card, CardTitle } from '../Card';
import { ActiveTransactionItem } from './ActiveTransactionItem';
import { ShowAllButton } from './ActiveTransactions.style';
export const ActiveTransactions = ({ toggleOpenTransac }) => {
    const { t } = useTranslation();
    const { account } = useWallet();
    const executingRoutes = useExecutingRoutesIds(account.address);
    if (!executingRoutes?.length) {
        return null;
    }
    const hasShowAll = executingRoutes?.length > 2;
    return (_jsxs(Card, { variant: "selected", selectionColor: "secondary", mt: 1, mb: 1, children: [_jsxs(Stack, { direction: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center', children: [_jsx(CardTitle, { noWrap: true, width: '100%', children: t('header.activeTransactions') }), hasShowAll ? (_jsx(ShowAllButton, { disableRipple: true, onClick: toggleOpenTransac, children: t('button.showAll') })) : null] }), _jsx(Stack, { spacing: 1.5, py: 2, children: executingRoutes.slice(0, 2).map((routeId) => (_jsx(ActiveTransactionItem, { routeId: routeId, dense: true }, routeId))) })] }));
};
