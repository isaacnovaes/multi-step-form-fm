import { useState } from 'react';
import Plan from './Plan';
import styles from './PlanSelection.module.css';

interface Props {}

const PLANS = [
    {
        type: 'Arcade',
        monthlyBilling: '9',
        yearlyBilling: '90',
        freeMonthPeriod: '2',
    },
    {
        type: 'Advanced',
        monthlyBilling: '12',
        yearlyBilling: '120',
        freeMonthPeriod: '2',
    },
    {
        type: 'Pro',
        monthlyBilling: '15',
        yearlyBilling: '150',
        freeMonthPeriod: '2',
    },
];

const PlanSelection = (props: Props) => {
    const [billingTime, setBillingType] = useState<'monthly' | 'yearly'>('monthly');
    return (
        <div>
            {PLANS.map((plan) => (
                <Plan key={plan.type} {...plan} />
            ))}
            <div className={styles['month-billing-container']}>
                <span
                    className={`${styles['month-billing']} ${
                        billingTime === 'monthly' ? styles['selected-billing'] : ''
                    }`}
                >
                    Monthly
                </span>
                <button
                    className={styles['switch-container']}
                    type='button'
                    onClick={() => {
                        setBillingType((curr) => (curr === 'monthly' ? 'yearly' : 'monthly'));
                    }}
                >
                    <span
                        className={`${styles.switch} ${
                            billingTime === 'yearly' ? styles.move : ''
                        }`}
                    />
                </button>
                <span
                    className={`${styles['month-billing']} ${
                        billingTime === 'yearly' ? styles['selected-billing'] : ''
                    }`}
                >
                    Yearly
                </span>
            </div>
        </div>
    );
};
export default PlanSelection;
