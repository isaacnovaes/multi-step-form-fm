import { useState } from 'react';
import AdvancedIcon from '../../assets/images/icon-advanced.svg';
import ArcadeIcon from '../../assets/images/icon-arcade.svg';
import ProIcon from '../../assets/images/icon-pro.svg';
import { useSelectedPlan, useSelectedPlanDispatch } from '../../context/planSelection/hooks';
import { useStepDispatch } from '../../context/step/hooks';
import FormFooter from '../Form/FormFooter/FormFooter';
import type { BillingPlanPeriod, PlanModel, PlanTypes } from '../types/global';
import MonthBillingSwitch from './MonthBillingSwitch/MonthBillingSwitch';
import Plan from './Plan/Plan';
import styles from './PlanSelection.module.css';

const ICONS: Record<PlanTypes, { src: string; alt: string }> = {
    arcade: { src: ArcadeIcon, alt: 'game icon' },
    advanced: { src: AdvancedIcon, alt: 'joystick icon' },
    pro: { src: ProIcon, alt: 'big joystick icon' },
};

const PLANS: PlanModel[] = [
    {
        type: 'arcade',
        monthlyBilling: '9',
        yearlyBilling: '90',
        freeMonthPeriod: '2',
    },
    {
        type: 'advanced',
        monthlyBilling: '12',
        yearlyBilling: '120',
        freeMonthPeriod: '2',
    },
    {
        type: 'pro',
        monthlyBilling: '15',
        yearlyBilling: '150',
        freeMonthPeriod: '2',
    },
];

const PlanSelection = () => {
    const stepDispatch = useStepDispatch();
    const previousChosenPlan = useSelectedPlan();
    const selectedPlanDispatch = useSelectedPlanDispatch();

    const [billingTime, setBillingType] = useState<BillingPlanPeriod>(
        previousChosenPlan?.billingTime ?? 'monthly'
    );
    const [selectedPlan, setSelectedPlan] = useState<PlanTypes>(
        previousChosenPlan?.plan.type ?? 'arcade'
    );

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
        <div>
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
        </div>
    );
};
export default PlanSelection;
