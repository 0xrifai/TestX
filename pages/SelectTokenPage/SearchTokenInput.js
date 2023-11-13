import { jsx as _jsx } from "react/jsx-runtime";
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, InputAdornment } from '@mui/material';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Card } from '../../components/Card';
import { FormKey } from '../../providers';
import { Input } from './SearchTokenInput.style';
export const SearchTokenInput = () => {
    const { t } = useTranslation();
    const { register, setValue } = useFormContext();
    useEffect(() => () => {
        setValue(FormKey.TokenSearchFilter, '');
    }, [setValue]);
    return (_jsx(Card, { children: _jsx(FormControl, { fullWidth: true, children: _jsx(Input, { size: "small", placeholder: t(`main.tokenSearch`), defaultValue: "", endAdornment: _jsx(InputAdornment, { position: "end", children: _jsx(SearchIcon, {}) }), inputProps: {
                    inputMode: 'search',
                    ...register(FormKey.TokenSearchFilter),
                }, autoComplete: "off" }) }) }));
};
