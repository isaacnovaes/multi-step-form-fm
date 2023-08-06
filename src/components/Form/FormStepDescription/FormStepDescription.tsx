import styles from './FormStepDescription.module.css';

interface Props {
    header: string;
    description: string;
}
const FormStepDescription = (props: Props) => {
    return (
        <div className={styles.container}>
            <h1>{props.header}</h1>
            <h2>{props.description}</h2>
        </div>
    );
};
export default FormStepDescription;
