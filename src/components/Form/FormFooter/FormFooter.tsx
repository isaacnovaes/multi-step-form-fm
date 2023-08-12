import { useGetStep } from '../../../context/step/hooks';
import styles from './FormFooter.module.css';

const FormFooter = (props: {
    onGoBackHandler?: React.MouseEventHandler<HTMLButtonElement>;
    onSubmit: React.MouseEventHandler<HTMLButtonElement>;
}) => {
    const currentStep = useGetStep();

    const onSubmitClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        props.onSubmit(e);
    };

    return (
        <div className={styles['form-navigation']}>
            <button
                type='button'
                className={`${styles['back-button']} ${currentStep > 1 ? styles.show : ''}`}
                onClick={props.onGoBackHandler}
            >
                Go Back
            </button>
            <button type='submit' className={styles['next-button']} onClick={onSubmitClick}>
                {currentStep === 4 ? 'Confirm' : 'Next Step'}
            </button>
        </div>
    );
};

export default FormFooter;
