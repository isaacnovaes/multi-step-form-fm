import styles from './Form.module.css';
import FormStepDescription from './FormStepDescription/FormStepDescription';

const Form = (props: { children: React.ReactNode }) => {
    return (
        <form className={styles['form-container']}>
            <FormStepDescription />
            {props.children}
        </form>
    );
};
export default Form;
