import { useMemo } from 'react';
import { useStep, useStepDispatch } from '../../context/step/hooks';
import PlanSelection from '../PlanSelection/PlanSelection';
import styles from './Form.module.css';
import FormStepDescription from './FormStepDescription/FormStepDescription';
import PersonalInfo from './PersonalInfo/PersonalInfo';

const STEPS_STATIC_DATA = [
    {
        header: 'Personal info',
        description: 'Please provide your name, email, address, and phone number.',
    },
    {
        header: 'Select your plain',
        description: 'Your have the option of monthly or yearly billing.',
    },
    {
        header: 'Pick add-ons',
        description: 'Add-ons help enhance your gaming experience.',
    },
    {
        header: 'Finishing up',
        description: 'Double-check everything looks OK before confirming. ',
    },
] as const;

// interface Props {}
const Form = () => {
    const currentStep = useStep();
    const stepDispatch = useStepDispatch();
    const stepDescription = STEPS_STATIC_DATA[currentStep - 1];

    const onNextStepHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log('next clicked');
        if (currentStep === 4) {
            stepDispatch({ type: 'go-to', step: 1 });
        } else {
            stepDispatch({ type: 'forward' });
        }
    };

    const onGoBackHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
        stepDispatch({ type: 'backwards' });
    };

    const formContent = useMemo(() => {
        return [<PersonalInfo key={0} />, <PlanSelection key={1} />];
    }, []);

    return (
        <form className={styles['form-container']} onSubmit={onNextStepHandler}>
            <FormStepDescription {...stepDescription} />
            {formContent[currentStep - 1] || null}
            <div className={styles['form-navigation']}>
                <button
                    type='button'
                    className={`${styles['back-button']} ${currentStep > 1 ? styles.show : ''}`}
                    onClick={onGoBackHandler}
                >
                    Go Back
                </button>
                <button type='submit' className={styles['next-button']}>
                    {currentStep === 4 ? 'Confirm' : 'Next Step'}
                </button>
            </div>
        </form>
    );
};
export default Form;
