import { useGetSelectedAddons } from '../../context/addon/hooks';
import { useGetSelectedPlan } from '../../context/planSelection/hooks';
import { useStepDispatch } from '../../context/step/hooks';
import FormFooter from '../Form/FormFooter/FormFooter';
import styles from './OrderSummary.module.css';

const capitalize = (label: string) => label[0].toUpperCase() + label.slice(1);

const OrderSummary = () => {
    const { plan, billingTime } = useGetSelectedPlan();
    const addons = useGetSelectedAddons();
    const stepDispatch = useStepDispatch();

    const isMonthly = billingTime === 'monthly';

    const totalOrderPrice = addons.reduce((sum, addon) => {
        return isMonthly ? sum + Number(addon.monthlyBilling) : sum + Number(addon.yearlyBilling);
    }, Number(isMonthly ? plan.monthlyBilling : plan.yearlyBilling));

    return (
        <>
            <div className={styles['order-summary-container']}>
                <div className={styles.order}>
                    <div className={styles['order-type']}>
                        <div className={styles.type}>
                            <div>{`${capitalize(plan.type)} (${capitalize(billingTime)})`}</div>
                            <button
                                type='button'
                                onClick={() => {
                                    stepDispatch({ type: 'go-to', step: 2 });
                                }}
                            >
                                Change
                            </button>
                        </div>
                        <div className={styles.planValue}>
                            {isMonthly ? `$${plan.monthlyBilling}/mo` : `$${plan.yearlyBilling}/yr`}
                        </div>
                    </div>
                    {addons.length ? <div className={styles.divider} /> : null}
                    <div className={styles.addons}>
                        {addons.map((ad) => (
                            <div key={ad.type} className={styles.addon}>
                                <span>{ad.addOn}</span>
                                <span>
                                    {isMonthly
                                        ? `+$${ad.monthlyBilling}/mo`
                                        : `+$${ad.yearlyBilling}/yr`}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.totalContainer}>
                    <div>{`Total (per ${isMonthly ? 'month' : 'year'})`}</div>
                    <div>{`$${totalOrderPrice}/${isMonthly ? 'mo' : 'yr'}`}</div>
                </div>
            </div>
            <FormFooter
                onSubmit={() => {
                    stepDispatch({ type: 'go-forward' });
                }}
                onGoBackHandler={() => {
                    stepDispatch({ type: 'go-backwards' });
                }}
            />
        </>
    );
};
export default OrderSummary;
