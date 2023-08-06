import { createContext, useReducer } from 'react';
import type { Step } from '../../components/types/global';
import { FINAL_STEP, INITIAL_STEP } from '../../constants/global';

const isStep = (number: number): number is Step => {
    return number >= INITIAL_STEP && number <= FINAL_STEP;
};
type StepDispatchAction =
    | {
          type: 'go-forward';
      }
    | { type: 'go-backwards' }
    | { type: 'go-to'; step: Step };

const StepContext = createContext<Step>(INITIAL_STEP);
// eslint-disable-next-line @typescript-eslint/no-empty-function
const StepDispatchContext = createContext<React.Dispatch<StepDispatchAction>>(() => {});

const stepReducer = (step: Step, action: StepDispatchAction): Step => {
    switch (action.type) {
        case 'go-forward': {
            const newStep = step + 1;
            if (isStep(newStep)) {
                return newStep;
            }
            return step;
        }
        case 'go-backwards': {
            const newStep = step - 1;
            if (isStep(newStep)) {
                return newStep;
            }
            return step;
        }
        case 'go-to': {
            return action.step;
        }
        default:
            new Error(`Something went wrong. This action type is not handled by StepContext.`);
            return step;
    }
};

interface Props {
    children: React.ReactNode;
}

const StepProvider = (props: Props) => {
    const [state, dispatch] = useReducer(stepReducer, INITIAL_STEP);
    return (
        <StepContext.Provider value={state}>
            <StepDispatchContext.Provider value={dispatch}>
                {props.children}
            </StepDispatchContext.Provider>
        </StepContext.Provider>
    );
};

export { StepProvider, StepContext, StepDispatchContext };
