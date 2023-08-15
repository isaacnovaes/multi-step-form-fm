import styles from './App.module.css';
import Form from './components/Form/Form';
import OrderSummary from './components/OrderSummary/OrderSummary';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import PickAddOns from './components/PickAddOns/PickAddOns';
import PlanSelection from './components/PlanSelection/PlanSelection';
import StepsSummary from './components/StepsSummary/StepsSummary';
import Success from './components/Success/Success';
import { useGetStep } from './context/step/hooks';

const formContent = [
    <PersonalInfo key={0} />,
    <PlanSelection key={1} />,
    <PickAddOns key={2} />,
    <OrderSummary key={3} />,
    <Success key={4} />,
];

function App() {
    const currentStep = useGetStep();

    return (
        <div className={styles.app}>
            <div className={styles['global-container']}>
                <StepsSummary />
                <Form>{formContent[currentStep - 1]}</Form>
            </div>
        </div>
    );
}

export default App;
