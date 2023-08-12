import { createContext, useReducer } from 'react';
import type { AddOn, OrNull } from '../../components/types/global';

type SelectedAddonsState = AddOn[];

const INITIAL_STATE: SelectedAddonsState = [];

type SelectedAddonsDispatchAction = {
    type: 'add-addon';
    addons: AddOn[];
};

const SelectedAddonsContext = createContext<OrNull<SelectedAddonsState>>(null);
const SelectedAddonsDispatchContext =
    createContext<OrNull<React.Dispatch<SelectedAddonsDispatchAction>>>(null);

const selectedAddonsReducer = (
    state: SelectedAddonsState,
    action: SelectedAddonsDispatchAction
) => {
    switch (action.type) {
        case 'add-addon': {
            return action.addons;
        }
        default:
            throw new Error(
                `Something went wrong. This action type is not handled by SelectedAddonsDispatchContext.`
            );
            return state;
    }
};

interface Props {
    children: React.ReactNode;
}

const SelectedAddonsProvider = (props: Props) => {
    const [state, dispatch] = useReducer(selectedAddonsReducer, INITIAL_STATE);
    return (
        <SelectedAddonsContext.Provider value={state}>
            <SelectedAddonsDispatchContext.Provider value={dispatch}>
                {props.children}
            </SelectedAddonsDispatchContext.Provider>
        </SelectedAddonsContext.Provider>
    );
};

export { SelectedAddonsContext, SelectedAddonsDispatchContext, SelectedAddonsProvider };
