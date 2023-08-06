import { useStep } from '../../context/step/hooks';
import Step from './Step/Step';
import styles from './StepsSummary.module.css';

const STEPS = [1, 2, 3, 4];

const StepsSummary = () => {
    const currentStep = useStep();
    return (
        <div className={styles.steps}>
            {STEPS.map((stepNumber) => (
                <Step key={stepNumber} step={stepNumber} selected={stepNumber === currentStep} />
            ))}
        </div>
    );
};
export default StepsSummary;
