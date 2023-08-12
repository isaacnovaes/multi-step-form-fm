import Checkmark from '../../../assets/images/icon-checkmark.svg';
import { useGetSelectedPlan } from '../../../context/planSelection/hooks';
import type { AddOn } from '../../types/global';
import styles from './AddOn.module.css';

interface AddonProps extends AddOn {
    selected: boolean;
    onClick: () => void;
}

const Addon = (props: AddonProps) => {
    const plan = useGetSelectedPlan();
    const billingDescription =
        plan.billingTime === 'monthly'
            ? `+$${props.monthlyBilling}/mo`
            : `+$${props.yearlyBilling}/yr`;
    return (
        <button
            type='button'
            className={`${styles['addon-container']} ${props.selected ? styles.selected : ''}`}
            onClick={props.onClick}
        >
            <img className={styles.icon} src={Checkmark} alt='Checkmark icon' />
            <div className={styles['addon-description']}>
                <h3>{props.addOn}</h3>
                <span className={styles.description}>{props.description}</span>
            </div>
            <span className={styles['addon-billingTime']}>{billingDescription}</span>
        </button>
    );
};
export default Addon;
