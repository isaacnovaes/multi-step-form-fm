import { useGetStep } from '../../context/step/hooks';
import type { Step as StepUnit } from '../types/global';
import Step from './Step/Step';
import styles from './StepsSummary.module.css';

const STEPS: StepUnit[] = [1, 2, 3, 4];

const StepsSummary = () => {
    const currentStep = useGetStep();
    const isFinalStep = currentStep === 5;
    return (
        <div className={styles.steps}>
            {STEPS.map((stepNumber) => (
                <Step
                    key={stepNumber}
                    step={stepNumber}
                    selected={stepNumber === currentStep || (stepNumber === 4 && isFinalStep)}
                />
            ))}
        </div>
    );
};
export default StepsSummary;
