import Select from 'react-select';

import classes from './dropdown.module.css';

interface Props {
    className?: string;
    label: string;
    options: any[];
    selectedItem?: string;
    onChangeDropdown: (e: any) => void;
}

const Dropdown = ({ className, label, options, selectedItem, onChangeDropdown }: Props) => (
    <div className={className}>
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

Dropdown.defaultProps = {
    className: undefined,
    selectedItem: undefined
};
    
export { Dropdown };