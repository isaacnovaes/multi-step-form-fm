import { createContext, useReducer } from 'react';
import type { BillingPlanPeriod, OrNull, PlanModel } from '../../components/types/global';
import { PLANS } from '../../constants/global';

export interface SelectedPlan {
    plan: PlanModel;
    billingTime: BillingPlanPeriod;
}

type SelectedPlanState = SelectedPlan;

const INITIAL_STATE: SelectedPlanState = { plan: PLANS[0], billingTime: 'monthly' };

type SelectedPlanDispatchAction = {
    type: 'add-plan';
    selectedPlan: SelectedPlan;
};

const SelectedPlanContext = createContext<OrNull<SelectedPlanState>>(null);
const SelectedPlanDispatchContext =
    createContext<OrNull<React.Dispatch<SelectedPlanDispatchAction>>>(null);

const selectedPlanReducer = (state: SelectedPlanState, action: SelectedPlanDispatchAction) => {
    switch (action.type) {
        case 'add-plan': {
            return action.selectedPlan;
        }
        default:
            throw new Error(
                `Something went wrong. This action type is not handled by SelectedPlanDispatchContext.`
            );
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
