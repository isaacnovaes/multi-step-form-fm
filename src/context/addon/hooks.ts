import { useContext } from 'react';
import { SelectedAddonsContext, SelectedAddonsDispatchContext } from './AddOnProvider';

const useGetSelectedAddons = () => {
    const selectedAddons = useContext(SelectedAddonsContext);
    if (selectedAddons === null) {
        throw new Error('Use SelectedAddonsProvider');
    }
    return selectedAddons;
};

const useSelectedAddonsDispatch = () => {
    const selectedAddonsDispatch = useContext(SelectedAddonsDispatchContext);
    if (selectedAddonsDispatch === null) {
        throw new Error('Use SelectedAddonsProvider');
    }
    return selectedAddonsDispatch;
};

export { useGetSelectedAddons, useSelectedAddonsDispatch };
