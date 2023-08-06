import { forwardRef, memo, useId } from 'react';
import styles from './TextInput.module.css';

interface Props extends Omit<React.ComponentPropsWithRef<'input'>, 'onChange'> {
    label: string;
    onValueChange: (newValue: string) => void;
    error: boolean;
}

const TextInput = forwardRef<HTMLInputElement, Props>(function TextInput(
    { label, onValueChange, error, ...commonInputProps },
    ref
) {
    const inputId = useId();

    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const newInputValue = e.target.value;

        onValueChange(newInputValue);
    };

    return (
        <div className={`${styles.container} ${error ? styles.error : ''}`}>
            <div className={styles['label-container']}>
                <label htmlFor={inputId}>{label}</label>
                {error ? <span>This field is required</span> : null}
            </div>
            <input ref={ref} id={inputId} onChange={onChangeHandler} {...commonInputProps} />
        </div>
    );
});

const TextInputMemoized = memo(TextInput);

export default TextInputMemoized;
