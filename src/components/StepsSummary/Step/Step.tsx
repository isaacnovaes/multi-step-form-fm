import type { Step } from '../../types/global';
import styles from './Step.module.css';

interface Props {
    step: Step;
    selected: boolean;
}

const STEP_DESCRIPTION: Record<Step, Record<'head' | 'info', string>> = {
    '1': { head: 'STEP 1', info: 'YOUR INFO' },
    '2': { head: 'STEP 2', info: 'SELECT PLAN' },
    '3': { head: 'STEP 3', info: 'ADD-ONS' },
    '4': { head: 'STEP 4', info: 'SUMMARY' },
    '5': { head: '', info: '' },
};

const StepInformation = ({ selected = false, step }: Props) => {
    return (
        <div className={styles['step-container']}>
            <span className={`${styles.step} ${selected ? styles.selected : ''}`}>{step}</span>
            <div className={styles.stepInfo}>
                <span>{STEP_DESCRIPTION[step].head}</span>
                <span>{STEP_DESCRIPTION[step].info}</span>
            </div>
        </div>
    );
};
export default StepInformation;
