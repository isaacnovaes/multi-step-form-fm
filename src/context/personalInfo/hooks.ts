import { useContext } from 'react';
import { PersonalInfoContext, PersonalInfoDispatchContext } from './PersonalInfoProvider';

const useGetPersonalInfo = () => {
    const personalInfo = useContext(PersonalInfoContext);
    if (personalInfo === null) {
        throw new Error('Use PersonalInfoProvider');
    }
    return personalInfo;
};

const usePersonalInfoDispatch = () => {
    const personalInfoDispatch = useContext(PersonalInfoDispatchContext);
    if (personalInfoDispatch === null) {
        throw new Error('Use PersonalInfoProvider');
    }
    return personalInfoDispatch;
};

export { useGetPersonalInfo, usePersonalInfoDispatch };
