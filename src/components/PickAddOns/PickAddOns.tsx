import { useState } from 'react';
import { ADDONS } from '../../constants/global';
import { useSelectedAddonsDispatch } from '../../context/addon/hooks';
import { useStepDispatch } from '../../context/step/hooks';
import FormFooter from '../Form/FormFooter/FormFooter';
import type { AddOnTypes } from '../types/global';
import AddOn from './AddOn/AddOn';
import styles from './PickAddOns.module.css';

const PickAddOns = () => {
    const [selectedAddOns, setSelectedAddOns] = useState<AddOnTypes[]>([]);
    const addonsDispatch = useSelectedAddonsDispatch();

    const stepDispatch = useStepDispatch();

    const onNextStepHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
        addonsDispatch({
            type: 'add-addon',
            addons: ADDONS.filter((ado) => selectedAddOns.includes(ado.type)),
        });
        stepDispatch({ type: 'go-forward' });
    };

    return (
        <div className={styles.addonsContainer}>
            {ADDONS.map((addOn) => {
                const isSelected = selectedAddOns.includes(addOn.type);
                return (
                    <AddOn
                        key={addOn.type}
                        {...addOn}
                        selected={isSelected}
                        onClick={() => {
                            const newAddOns: AddOnTypes[] = isSelected
                                ? selectedAddOns.filter((sdo) => sdo !== addOn.type)
                                : [...selectedAddOns, addOn.type];

                            setSelectedAddOns(newAddOns);
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
