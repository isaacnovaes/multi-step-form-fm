import { useContext } from 'react';
import { StepContext, StepDispatchContext } from './StepProvider';

const useStep = () => {
    const step = useContext(StepContext);
    return step;
};

const useStepDispatch = () => {
    const stepDispatch = useContext(StepDispatchContext);
    return stepDispatch;
};

export { useStep, useStepDispatch };
