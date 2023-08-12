import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { StepProvider } from './context/step/StepProvider.tsx';
import { PersonalInfoProvider } from './context/personalInfo/PersonalInfoProvider.tsx';
import { SelectedPlanProvider } from './context/planSelection/PlanSelectionProvider.tsx';
import { SelectedAddonsProvider } from './context/addon/AddOnProvider.tsx';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <StepProvider>
            <PersonalInfoProvider>
                <SelectedPlanProvider>
                    <SelectedAddonsProvider>
                        <App />
                    </SelectedAddonsProvider>
                </SelectedPlanProvider>
            </PersonalInfoProvider>
        </StepProvider>
    </StrictMode>
);
