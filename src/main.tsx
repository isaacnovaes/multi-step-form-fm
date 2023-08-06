import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { StepProvider } from './context/step/StepProvider.tsx';
import { PersonalInfoProvider } from './context/personalInfo/PersonalInfoProvider.tsx';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <StepProvider>
            <PersonalInfoProvider>
                <App />
            </PersonalInfoProvider>
        </StepProvider>
    </StrictMode>
);
