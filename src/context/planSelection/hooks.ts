import { useContext } from 'react';
import { SelectedPlanContext, SelectedPlanDispatchContext } from './PlanSelectionProvider';

const useSelectedPlan = () => {
    const selectedPlan = useContext(SelectedPlanContext);
    return selectedPlan;
};

const useSelectedPlanDispatch = () => {
    const selectedPlanDispatch = useContext(SelectedPlanDispatchContext);
    return selectedPlanDispatch;
};

export { useSelectedPlan, useSelectedPlanDispatch };
