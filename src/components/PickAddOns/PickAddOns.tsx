import { useState } from 'react';
import { ADDONS } from '../../constants/global';
import { useGetSelectedAddons, useSelectedAddonsDispatch } from '../../context/addon/hooks';
import { useStepDispatch } from '../../context/step/hooks';
import FormFooter from '../Form/FormFooter/FormFooter';
import type { AddOnTypes } from '../types/global';
import AddOn from './AddOn/AddOn';
import styles from './PickAddOns.module.css';

const PickAddOns = () => {
    const previousAddons = useGetSelectedAddons();
    const [selectedAddOnsType, setSelectedAddOnsType] = useState<AddOnTypes[]>(
        previousAddons.map((ad) => ad.type)
    );

    const addonsDispatch = useSelectedAddonsDispatch();

    const stepDispatch = useStepDispatch();

    const onNextStepHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
        addonsDispatch({
            type: 'add-addon',
            addons: ADDONS.filter((ado) => selectedAddOnsType.includes(ado.type)),
        });
        stepDispatch({ type: 'go-forward' });
    };

    return (
        <div className={styles.addonsContainer}>
            {ADDONS.map((addOn) => {
                const isSelected = selectedAddOnsType.includes(addOn.type);
                return (
                    <AddOn
                        key={addOn.type}
                        {...addOn}
                        selected={isSelected}
                        onClick={() => {
                            const newAddOns: AddOnTypes[] = isSelected
                                ? selectedAddOnsType.filter((sdo) => sdo !== addOn.type)
                                : [...selectedAddOnsType, addOn.type];

                            setSelectedAddOnsType(newAddOns);
                        }}
                    />
                );
            })}
            <FormFooter
                onSubmit={onNextStepHandler}
                onGoBackHandler={() => {
                    stepDispatch({ type: 'go-backwards' });
                }}
            />
        </div>
    );
};
export default PickAddOns;
