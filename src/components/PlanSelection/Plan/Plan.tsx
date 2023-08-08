import type { BillingPlanPeriod, PlanModel } from '../../types/global';
import styles from './Plan.module.css';

interface Props extends PlanModel {
    src: string;
    alt: string;
    billingTime: BillingPlanPeriod;
    selected: boolean;
    onClick: () => void;
}

const capitalize = (label: string) => label[0].toUpperCase() + label.slice(1);

const Plan = (props: Props) => {
    const planInstallment =
        props.billingTime === 'monthly'
            ? `$${props.monthlyBilling}/mo`
            : `$${props.yearlyBilling}/yr`;
    return (
        <button
            type='button'
            className={`${styles['plan-container']} ${props.selected ? styles.selected : ''}`}
            onClick={props.onClick}
        >
            <img className={styles.icon} src={props.src} alt={props.alt} />
            <div className={`${styles['plan-description']}`}>
                <h3>{capitalize(props.type)}</h3>
                <span className={`${styles.billingTime}`}>{planInstallment}</span>
                {props.billingTime === 'yearly' ? (
                    <span className={`${styles.freeTear}`}>2 months free</span>
                ) : null}
            </div>
        </button>
    );
};
export default Plan;
