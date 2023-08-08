import { createContext, useReducer } from 'react';
import type { BillingPlanPeriod, PlanModel } from '../../components/types/global';

export interface SelectedPlan {
    plan: PlanModel;
    billingTime: BillingPlanPeriod;
}

type SelectedPlanState = SelectedPlan | null;

const INITIAL_STATE: SelectedPlanState = null;

type SelectedPlanDispatchAction = {
    type: 'add-plan';
    selectedPlan: SelectedPlan;
};

const SelectedPlanContext = createContext<SelectedPlanState>(INITIAL_STATE);
const SelectedPlanDispatchContext = createContext<React.Dispatch<SelectedPlanDispatchAction>>(
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    () => {}
);

const selectedPlanReducer = (state: SelectedPlanState, action: SelectedPlanDispatchAction) => {
    switch (action.type) {
        case 'add-plan': {
            return action.selectedPlan;
        }
        default:
            new Error(`Something went wrong. This action type is not handled by StepContext.`);
            return state;
    }
};

interface Props {
    children: React.ReactNode;
}

const SelectedPlanProvider = (props: Props) => {
    const [state, dispatch] = useReducer(selectedPlanReducer, INITIAL_STATE);
    return (
        <SelectedPlanContext.Provider value={state}>
            <SelectedPlanDispatchContext.Provider value={dispatch}>
                {props.children}
            </SelectedPlanDispatchContext.Provider>
        </SelectedPlanContext.Provider>
    );
};

export { SelectedPlanContext, SelectedPlanDispatchContext, SelectedPlanProvider };

