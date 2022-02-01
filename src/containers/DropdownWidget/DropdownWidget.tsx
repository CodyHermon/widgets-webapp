import { useCallback, useState } from "react";

import { DropdownWidget } from "../../components/DropdownWidget";

const DropdownWidgetContainer = () => {
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
        <DropdownWidget 
            options={filteredOptions}
            onChangeDropdown={onChangeDropdown}
        />
    );
};

export { DropdownWidgetContainer as DropdownWidget };