import { createContext, useReducer } from 'react';
import type { OrNull } from '../../components/types/global';

export interface PersonalInfoState {
    name: string;
    address: string;
    phone: string;
}

const INITIAL_STATE: PersonalInfoState = { name: '', address: '', phone: '' };

type PersonalInfoDispatchAction =
    | {
          type: 'update-name';
          newName: string;
      }
    | {
          type: 'update-address';
          newAddress: string;
      }
    | {
          type: 'update-phone';
          newPhone: string;
      };

const PersonalInfoContext = createContext<OrNull<PersonalInfoState>>(null);
const PersonalInfoDispatchContext =
    createContext<OrNull<React.Dispatch<PersonalInfoDispatchAction>>>(null);

const personalInfoReducer = (state: PersonalInfoState, action: PersonalInfoDispatchAction) => {
    switch (action.type) {
        case 'update-name': {
            return { ...state, name: action.newName };
        }
        case 'update-address': {
            return { ...state, address: action.newAddress };
        }
        case 'update-phone': {
            return { ...state, phone: action.newPhone };
        }
        default:
            throw new Error(
                `Something went wrong. This action type is not handled by PersonalInfoDispatchContext.`
            );
            return state;
    }
};

interface Props {
    children: React.ReactNode;
}

const PersonalInfoProvider = (props: Props) => {
    const [state, dispatch] = useReducer(personalInfoReducer, INITIAL_STATE);
    return (
        <PersonalInfoContext.Provider value={state}>
            <PersonalInfoDispatchContext.Provider value={dispatch}>
                {props.children}
            </PersonalInfoDispatchContext.Provider>
        </PersonalInfoContext.Provider>
    );
};

export { PersonalInfoContext, PersonalInfoDispatchContext, PersonalInfoProvider };
