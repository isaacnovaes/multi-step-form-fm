import { createContext, useReducer } from 'react';

type StepDispatchAction =
    | {
          type: 'forward';
      }
    | { type: 'backwards' }
    | { type: 'go-to'; step: number };

const StepContext = createContext<number>(1);
// eslint-disable-next-line @typescript-eslint/no-empty-function
const StepDispatchContext = createContext<React.Dispatch<StepDispatchAction>>(() => {});

const stepReducer = (step: number, action: StepDispatchAction) => {
    switch (action.type) {
        case 'forward': {
            return step + 1;
        }
        case 'backwards': {
            return step - 1;
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
    const [state, dispatch] = useReducer(stepReducer, 1);
    return (
        <StepContext.Provider value={state}>
            <StepDispatchContext.Provider value={dispatch}>
                {props.children}
            </StepDispatchContext.Provider>
        </StepContext.Provider>
    );
};

export { StepProvider, StepContext, StepDispatchContext };
