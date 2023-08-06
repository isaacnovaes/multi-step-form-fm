import type { BillingPlanPeriod } from '../../types/global';
import styles from './MonthBillingSwitch.module.css';

interface Props {
    billingTime: 'monthly' | 'yearly';
    setBillingType: React.Dispatch<React.SetStateAction<BillingPlanPeriod>>;
}

const MonthBillingSwitch = (props: Props) => {
    const { billingTime, setBillingType } = props;
    return (
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
                    className={`${styles.switch} ${billingTime === 'yearly' ? styles.move : ''}`}
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
    );
};
export default MonthBillingSwitch;
