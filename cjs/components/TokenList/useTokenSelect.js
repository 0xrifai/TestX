"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTokenSelect = void 0;
const widget_1 = require("@lifi/widget");
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const providers_1 = require("../../providers");
const useTokenSelect = (formType, onClick) => {
    const tokenKey = providers_1.FormKeyHelper.getTokenKey(formType);
    const { field: { onChange, onBlur }, } = (0, react_hook_form_1.useController)({ name: tokenKey });
    const { setValue, getValues } = (0, react_hook_form_1.useFormContext)();
    const { subvariant } = (0, providers_1.useWidgetConfig)();
    const emitter = (0, widget_1.useWidgetEvents)();
    return (0, react_1.useCallback)((tokenAddress, chainId) => {
        onChange(tokenAddress);
        onBlur();
        const selectedChainId = chainId ?? getValues(providers_1.FormKeyHelper.getChainKey(formType));
        // Set chain again to trigger URL builder update
        setValue(providers_1.FormKeyHelper.getChainKey(formType), selectedChainId, {
            shouldDirty: true,
            shouldTouch: true,
        });
        setValue(providers_1.FormKeyHelper.getAmountKey(formType), '');
        const oppositeFormType = formType === 'from' ? 'to' : 'from';
        const [selectedOppositeToken, selectedOppositeChainId] = getValues([
            providers_1.FormKeyHelper.getTokenKey(oppositeFormType),
            providers_1.FormKeyHelper.getChainKey(oppositeFormType),
        ]);
        if (selectedOppositeToken === tokenAddress &&
            selectedOppositeChainId === selectedChainId &&
            subvariant !== 'nft') {
            setValue(providers_1.FormKeyHelper.getTokenKey(oppositeFormType), '', {
                shouldDirty: true,
                shouldTouch: true,
            });
        }
        const eventToEmit = formType === 'from'
            ? widget_1.WidgetEvent.SourceChainTokenSelected
            : widget_1.WidgetEvent.DestinationChainTokenSelected;
        emitter.emit(eventToEmit, {
            chainId: selectedChainId,
            tokenAddress,
        });
        onClick?.();
    }, [
        emitter,
        formType,
        getValues,
        onBlur,
        onChange,
        onClick,
        setValue,
        subvariant,
    ]);
};
exports.useTokenSelect = useTokenSelect;
