import { useContext } from 'react';
import { StepContext, StepDispatchContext } from './StepProvider';

const useGetStep = () => {
    const step = useContext(StepContext);
    if (step === null) {
        throw new Error('Use StepProvider');
    }
    return step;
};

const useStepDispatch = () => {
    const stepDispatch = useContext(StepDispatchContext);
    if (stepDispatch === null) {
        throw new Error('Use StepProvider');
    }
    return stepDispatch;
};

export { useGetStep, useStepDispatch };
