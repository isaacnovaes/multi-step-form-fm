import { useCallback } from 'react';
import { usePersonalInfo, usePersonalInfoDispatch } from '../../../context/personalInfo/hooks';
import TextInput from '../Input/TextInput';
import styles from './PersonalInfo.module.css';

const PersonalInfo = () => {
    const { name, address, phone } = usePersonalInfo();
    const personalInfoDispatch = usePersonalInfoDispatch();

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

    return (
        <div className={styles['personal-info-container']}>
            <TextInput
                label='Name'
                placeholder='e.g. Stephen King'
                error={false}
                type='text'
                value={name}
                onValueChange={onNameChange}
            />
            <TextInput
                label='Email Address'
                placeholder='e.g. stephenking@lorem.com'
                error={false}
                type='email'
                value={address}
                onValueChange={onEmailChange}
            />
            <TextInput
                label='Phone Number'
                placeholder='e.g. +1 234 567 890'
                error={false}
                type='tel'
                value={phone}
                onValueChange={onPhoneChange}
            />
        </div>
    );
};
export default PersonalInfo;
