"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepTimer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_timer_hook_1 = require("react-timer-hook");
const getExpiryTimestamp = (step) => new Date((step.execution?.process[0]?.startedAt ?? Date.now()) +
    step.estimate.executionDuration * 1000);
const StepTimer = ({ step, hideInProgress }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [isExpired, setExpired] = (0, react_1.useState)(false);
    const [isExecutionStarted, setExecutionStarted] = (0, react_1.useState)(!!step.execution);
    const [expiryTimestamp] = (0, react_1.useState)(() => getExpiryTimestamp(step));
    const { seconds, minutes, isRunning, pause, resume, restart } = (0, react_timer_hook_1.useTimer)({
        autoStart: false,
        expiryTimestamp,
        onExpire: () => setExpired(true),
    });
    (0, react_1.useEffect)(() => {
        if (isExpired || !step.execution) {
            return;
        }
        if (!isExecutionStarted) {
            setExecutionStarted(true);
            restart(getExpiryTimestamp(step));
        }
        const shouldBePaused = step.execution.process.some((process) => process.status === 'ACTION_REQUIRED' || process.status === 'FAILED');
        if (isRunning && shouldBePaused) {
            pause();
        }
        else if (!isRunning && !shouldBePaused) {
            resume();
        }
    }, [
        expiryTimestamp,
        isExecutionStarted,
        isExpired,
        isRunning,
        pause,
        restart,
        resume,
        step,
    ]);
    if (!isExecutionStarted) {
        return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: t('main.estimatedTime', {
                value: Math.ceil(step.estimate.executionDuration / 60),
            }) }));
    }
    const isTimerExpired = isExpired || (!minutes && !seconds);
    if (step.execution?.status === 'DONE' ||
        step.execution?.status === 'FAILED' ||
        (isTimerExpired && hideInProgress)) {
        return null;
    }
    return isTimerExpired ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: t('main.inProgress') })) : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}` }));
};
exports.StepTimer = StepTimer;
