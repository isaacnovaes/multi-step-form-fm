import { useState } from 'react';
import AdvancedIcon from '../../assets/images/icon-advanced.svg';
import ArcadeIcon from '../../assets/images/icon-arcade.svg';
import ProIcon from '../../assets/images/icon-pro.svg';
import { PLANS } from '../../constants/global';
import { useGetSelectedPlan, useSelectedPlanDispatch } from '../../context/planSelection/hooks';
import { useStepDispatch } from '../../context/step/hooks';
import FormFooter from '../Form/FormFooter/FormFooter';
import type { BillingPlanPeriod, PlanTypes } from '../types/global';
import MonthBillingSwitch from './MonthBillingSwitch/MonthBillingSwitch';
import Plan from './Plan/Plan';
import styles from './PlanSelection.module.css';

const ICONS: Record<PlanTypes, { src: string; alt: string }> = {
    arcade: { src: ArcadeIcon, alt: 'game icon' },
    advanced: { src: AdvancedIcon, alt: 'joystick icon' },
    pro: { src: ProIcon, alt: 'big joystick icon' },
};

const PlanSelection = () => {
    const stepDispatch = useStepDispatch();
    const previousChosenPlan = useGetSelectedPlan();
    const selectedPlanDispatch = useSelectedPlanDispatch();

    const [billingTime, setBillingType] = useState<BillingPlanPeriod>(
        previousChosenPlan.billingTime
    );
    const [selectedPlan, setSelectedPlan] = useState<PlanTypes>(previousChosenPlan.plan.type);

    const onNextStepHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
        const chosenPlan = PLANS.find((plan) => plan.type === selectedPlan);

        if (!chosenPlan) return;

        selectedPlanDispatch({
            type: 'add-plan',
            selectedPlan: { plan: chosenPlan, billingTime },
        });

        stepDispatch({ type: 'go-forward' });
    };

    return (
        <>
            <div className={`${styles.planSelectionContainer}`}>
                {PLANS.map((plan) => (
                    <Plan
                        key={plan.type}
                        {...ICONS[plan.type]}
                        {...plan}
                        billingTime={billingTime}
                        selected={selectedPlan === plan.type}
                        onClick={() => {
                            setSelectedPlan(plan.type);
                        }}
                    />
                ))}
            </div>
            <MonthBillingSwitch billingTime={billingTime} setBillingType={setBillingType} />
            <FormFooter
                onSubmit={onNextStepHandler}
                onGoBackHandler={() => {
                    stepDispatch({ type: 'go-backwards' });
                }}
            />
        </>
    );
};
export default PlanSelection;
