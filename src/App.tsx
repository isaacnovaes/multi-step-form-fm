import styles from './App.module.css';
import Form from './components/Form/Form';
import StepsSummary from './components/StepsSummary/StepsSummary';

function App() {
    return (
        <div className={styles['global-container']}>
            <StepsSummary />
            <Form />
        </div>
    );
}

export default App;
