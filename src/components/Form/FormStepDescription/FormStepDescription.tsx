import { useGetStep } from '../../../context/step/hooks';
import styles from './FormStepDescription.module.css';

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
];

const FormStepDescription = () => {
    const currentStep = useGetStep();
    const isFinalStep = currentStep === 5;
    const stepDescription = STEPS_STATIC_DATA[currentStep - 1];

    if (isFinalStep) return null;

    return (
        <div className={styles.container}>
            <h1>{stepDescription.header}</h1>
            <h2>{stepDescription.description}</h2>
        </div>
    );
};
export default FormStepDescription;
