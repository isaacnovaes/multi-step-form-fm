import { useContext } from 'react';
import { SelectedPlanContext, SelectedPlanDispatchContext } from './PlanSelectionProvider';

const useGetSelectedPlan = () => {
    const selectedPlan = useContext(SelectedPlanContext);
    if (selectedPlan === null) {
        throw new Error('Use SelectedPlanProvider');
    }
    return selectedPlan;
};

const useSelectedPlanDispatch = () => {
    const selectedPlanDispatch = useContext(SelectedPlanDispatchContext);
    if (selectedPlanDispatch === null) {
        throw new Error('Use SelectedPlanProvider');
    }
    return selectedPlanDispatch;
};

export { useGetSelectedPlan, useSelectedPlanDispatch };
