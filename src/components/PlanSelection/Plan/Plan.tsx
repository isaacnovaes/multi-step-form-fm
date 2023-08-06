import type { PlanModel } from '../../types/global';
import styles from './Plan.module.css';

interface Props extends PlanModel {
    src: string;
    alt: string;
}

const capitalize = (label: string) => label[0].toUpperCase() + label.slice(1);

const Plan = (props: Props) => {
    const planInstallment = `$${props.monthlyBilling}/mo`;
    return (
        <div className={styles['plan-container']}>
            <img className={styles.icon} src={props.src} alt={props.alt} />
            <div>
                <h3>{capitalize(props.type)}</h3>
                <span>{planInstallment}</span>
            </div>
        </div>
    );
};
export default Plan;
