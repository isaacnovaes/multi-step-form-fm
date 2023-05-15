import styles from './Step.module.css';

interface Props {
    step: number;
    selected?: boolean;
}

const Step = ({ selected = false, step }: Props) => {
    const className = `${styles.step} ${selected ? styles.selected : ''}`;
    return <span className={className}>{step}</span>;
};
export default Step;
