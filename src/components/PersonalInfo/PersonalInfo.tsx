import { useCallback, useState } from 'react';
import type { PersonalInfoState } from '../../context/personalInfo/PersonalInfoProvider';
import { usePersonalInfo, usePersonalInfoDispatch } from '../../context/personalInfo/hooks';
import { useStepDispatch } from '../../context/step/hooks';
import FormFooter from '../Form/FormFooter/FormFooter';
import TextInput from '../Form/Input/TextInput';
import { validateEmail, validateTelephone } from '../Form/form-helpers';
import styles from './PersonalInfo.module.css';

const PersonalInfo = () => {
    const { name, address, phone } = usePersonalInfo();
    const personalInfoDispatch = usePersonalInfoDispatch();
    const stepDispatch = useStepDispatch();
    const [inputsError, setInputsError] = useState<Record<keyof PersonalInfoState, boolean>>({
        name: false,
        address: false,
        phone: false,
    });

    const onNameChange = useCallback(
        (newName: string) => {
            console.log('render name');
            personalInfoDispatch({ type: 'update-name', newName });
        },
        [personalInfoDispatch]
    );

    const onEmailChange = useCallback(
        (newAddress: string) => {
            console.log('render email');
            personalInfoDispatch({
                type: 'update-address',
                newAddress,
            });
        },
        [personalInfoDispatch]
    );

    const onPhoneChange = useCallback(
        (newPhone: string) => {
            console.log('render phone');
            personalInfoDispatch({
                type: 'update-phone',
                newPhone,
            });
        },
        [personalInfoDispatch]
    );

    const onNextStepHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();

        const errors: typeof inputsError = { name: false, address: false, phone: false };

        errors.name = name === '';
        errors.address = !validateEmail(address);
        errors.phone = !validateTelephone(phone);

        if (errors.name || errors.address || errors.phone) {
            setInputsError(errors);
            return;
        }

        stepDispatch({ type: 'go-forward' });
    };

    return (
        <>
            <div className={styles['personal-info-container']}>
                <TextInput
                    label='Name'
                    placeholder='e.g. Stephen King'
                    type='text'
                    value={name}
                    onValueChange={onNameChange}
                    error={inputsError.name}
                />
                <TextInput
                    label='Email Address'
                    placeholder='e.g. stephenking@lorem.com'
                    type='email'
                    value={address}
                    onValueChange={onEmailChange}
                    error={inputsError.address}
                />
                <TextInput
                    label='Phone Number'
                    placeholder='e.g. +1 234 567 890'
                    type='tel'
                    value={phone}
                    onValueChange={onPhoneChange}
                    error={inputsError.phone}
                />
            </div>
            <FormFooter onSubmit={onNextStepHandler} />
        </>
    );
};
export default PersonalInfo;
