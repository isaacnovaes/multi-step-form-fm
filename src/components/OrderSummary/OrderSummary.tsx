import { useGetSelectedAddons } from '../../context/addon/hooks';
import { useGetSelectedPlan } from '../../context/planSelection/hooks';

const OrderSummary = () => {
    const { plan, billingTime } = useGetSelectedPlan();
    const addons = useGetSelectedAddons();

    return (
        <div>
            <div>{plan.type}</div>
            <div>{billingTime}</div>
            {addons.map((ad) => (
                <div key={ad.type}>{ad.addOn}</div>
            ))}
        </div>
    );
};
export default OrderSummary;
