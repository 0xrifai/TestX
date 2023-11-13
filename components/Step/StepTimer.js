import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTimer } from 'react-timer-hook';
const getExpiryTimestamp = (step) => new Date((step.execution?.process[0]?.startedAt ?? Date.now()) +
    step.estimate.executionDuration * 1000);
export const StepTimer = ({ step, hideInProgress }) => {
    const { t } = useTranslation();
    const [isExpired, setExpired] = useState(false);
    const [isExecutionStarted, setExecutionStarted] = useState(!!step.execution);
    const [expiryTimestamp] = useState(() => getExpiryTimestamp(step));
    const { seconds, minutes, isRunning, pause, resume, restart } = useTimer({
        autoStart: false,
        expiryTimestamp,
        onExpire: () => setExpired(true),
    });
    useEffect(() => {
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
        return (_jsx(_Fragment, { children: t('main.estimatedTime', {
                value: Math.ceil(step.estimate.executionDuration / 60),
            }) }));
    }
    const isTimerExpired = isExpired || (!minutes && !seconds);
    if (step.execution?.status === 'DONE' ||
        step.execution?.status === 'FAILED' ||
        (isTimerExpired && hideInProgress)) {
        return null;
    }
    return isTimerExpired ? (_jsx(_Fragment, { children: t('main.inProgress') })) : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    _jsx(_Fragment, { children: `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}` }));
};