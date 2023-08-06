import { useState } from 'react';
import AdvancedIcon from '../../assets/images/icon-advanced.svg';
import ArcadeIcon from '../../assets/images/icon-arcade.svg';
import ProIcon from '../../assets/images/icon-pro.svg';
import type { BillingPlanPeriod, PlanModel, PlanTypes } from '../types/global';
import MonthBillingSwitch from './MonthBillingSwitch/MonthBillingSwitch';
import Plan from './Plan/Plan';
// import styles from './PlanSelection.module.css';

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
    const [billingTime, setBillingType] = useState<BillingPlanPeriod>('monthly');
    return (
        <div>
            {PLANS.map((plan) => (
                <Plan key={plan.type} {...ICONS[plan.type]} {...plan} />
            ))}
            <MonthBillingSwitch billingTime={billingTime} setBillingType={setBillingType} />
        </div>
    );
};
export default PlanSelection;
