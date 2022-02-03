import Select from 'react-select';

import classes from './dropdown.module.css';

interface Props {
    label: string;
    options: any[];
    selectedItem: string;
    onChangeDropdown: (e: any) => void;
}

const Dropdown = ({ label, options, selectedItem, onChangeDropdown }: Props) => (
    <div>
        <label className={classes.dropdownLabel}>{label}</label>
        <Select
            className={classes.dropdown}
            options={options}
            placeholder={options[0].label}
            isSearchable={false}
            onChange={onChangeDropdown}
        />
        {selectedItem &&
        <p style={{ color: `${selectedItem}` }}>
            This text is {selectedItem}!
        </p>
        }
    </div>
);
    
export { Dropdown };