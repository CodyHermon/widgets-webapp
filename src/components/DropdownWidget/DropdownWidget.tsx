import Select from 'react-select';

import classes from './dropdownWidget.module.css';

interface Props {
    options: any[];
    onChangeDropdown: (e: any) => void;
}

const DropdownWidget = ({ options, onChangeDropdown }: Props) => (
    <div>
        <label className={classes.dropdownLabel}>Select a Color</label>
        <Select
            className={classes.dropdown}
            options={options}
            placeholder={options[0].label}
            isSearchable={false}
            onChange={onChangeDropdown}
        />
    </div>
);
    
export { DropdownWidget };