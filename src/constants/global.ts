import type { AddOn, PlanModel, Step } from '../components/types/global';

const INITIAL_STEP: Step = 1;
const FINAL_STEP: Step = 4;

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

const ADDONS: AddOn[] = [
    {
        type: 'online-service',
        addOn: 'Online service',
        description: 'Access to multiplayer games',
        monthlyBilling: '1',
        yearlyBilling: '10',
    },
    {
        type: 'larger-storage',
        addOn: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        monthlyBilling: '2',
        yearlyBilling: '20',
    },
    {
        type: 'customizable-profile',
        addOn: 'Customizable profile',
        description: 'Custom theme on your profile',
        monthlyBilling: '2',
        yearlyBilling: '20',
    },
];

export { FINAL_STEP, INITIAL_STEP, PLANS, ADDONS };
