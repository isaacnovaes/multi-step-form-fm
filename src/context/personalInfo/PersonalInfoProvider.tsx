import { createContext, useReducer } from 'react';

interface PersonalInfoState {
    name: string;
    address: string;
    phone: string;
}

const initialState: PersonalInfoState = { name: '', address: '', phone: '' };

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

const PersonalInfoContext = createContext<PersonalInfoState>(initialState);
const PersonalInfoDispatchContext = createContext<React.Dispatch<PersonalInfoDispatchAction>>(
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    () => {}
);

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
            new Error(`Something went wrong. This action type is not handled by StepContext.`);
            return state;
    }
};

interface Props {
    children: React.ReactNode;
}

const PersonalInfoProvider = (props: Props) => {
    const [state, dispatch] = useReducer(personalInfoReducer, initialState);
    return (
        <PersonalInfoContext.Provider value={state}>
            <PersonalInfoDispatchContext.Provider value={dispatch}>
                {props.children}
            </PersonalInfoDispatchContext.Provider>
        </PersonalInfoContext.Provider>
    );
};

export { PersonalInfoProvider, PersonalInfoContext, PersonalInfoDispatchContext };
