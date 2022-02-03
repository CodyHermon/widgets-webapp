import { Dropdown } from "../Dropdown";
import { Convert } from "../../containers/Convert";

import classes from './translate.module.css';

interface Props {
    options: any[];
    language: any;
    text: string;
    onChangeDropdown: (e: any) => void;
    onChangeText: (e: any) => void;
}

const Translate = ({ options, language, text, onChangeDropdown, onChangeText }: Props) => (
    <div>
        <label className={classes.inputLabel}>Enter Text</label>
        <input className={classes.textInput} value={text} onChange={onChangeText}/>
        <Dropdown
            label="Select a Language"
            options={options}
            selectedItem={language}
            onChangeDropdown={onChangeDropdown}
        />
        <hr />
        <h3>Output</h3>
        <Convert language={language} text={text}/>
    </div>
);

export { Translate };