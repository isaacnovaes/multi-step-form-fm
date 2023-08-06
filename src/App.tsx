import styles from './App.module.css';
import Form from './components/Form/Form';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import PlanSelection from './components/PlanSelection/PlanSelection';
import StepsSummary from './components/StepsSummary/StepsSummary';
import { useStep } from './context/step/hooks';

const formContent = [<PersonalInfo key={0} />, <PlanSelection key={1} />];

function App() {
    const currentStep = useStep();

    return (
        <div className={styles['global-container']}>
            <StepsSummary />
            <Form>{formContent[currentStep - 1]}</Form>
        </div>
    );
}

export default App;
