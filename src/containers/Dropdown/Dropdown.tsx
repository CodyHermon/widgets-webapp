import { useCallback, useState } from "react";

import { Dropdown } from "../../components/Dropdown";

interface Props {
    className?: string;
}

const DropdownContainer = ({ className }: Props) => {
    const options = [
        {
            label: 'The Color Red',
            value: 'red'
        },
        {
            label: 'The Color Green',
            value: 'green'
        },
        {
            label: 'The Color Blue',
            value: 'blue'
        }
    ];

    const [selectedItem, setSelectedItem] = useState('');

    const filteredOptions = options.filter(option => option.value !== selectedItem);

    const onChangeDropdown = useCallback((e: any) => {
        setSelectedItem(e.value);
    }, []);

    return (
        <Dropdown
            className={className}
            label="Select a Color"
            options={filteredOptions}
            onChangeDropdown={onChangeDropdown}
            selectedItem={selectedItem}
        />
    );
};

DropdownContainer.defaultProps = {
    className: undefined
};

export { DropdownContainer as Dropdown };