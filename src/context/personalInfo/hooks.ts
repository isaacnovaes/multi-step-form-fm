import { useContext } from 'react';
import {
    PersonalInfoContext,
    PersonalInfoDispatchContext,
} from './PersonalInfoProvider';

const usePersonalInfo = () => {
    const personalInfo = useContext(PersonalInfoContext);
    return personalInfo;
};

const usePersonalInfoDispatch = () => {
    const personalInfoDispatch = useContext(PersonalInfoDispatchContext);
    return personalInfoDispatch;
};

export { usePersonalInfo, usePersonalInfoDispatch };
