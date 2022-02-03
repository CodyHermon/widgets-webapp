import { useCallback, useState } from "react";
import { Translate } from "../../components/Translate"

const TranslateContainer = () => {
    const options = [
        {
            label: 'Afrikaans',
            value: 'af'
        },
        {
            label: 'Arabic',
            value: 'ar'
        },
        {
            label: 'Hindi',
            value: 'hi'
        },
        {
            label: 'Tagalog',
            value: 'tl'
        }
    ];

    const [language, setLanguage] = useState(options[0].value);
    const [text, setText] = useState('');

    const onChangeDropdown = useCallback((e: any) => {
        setLanguage(e.value);
    }, []);

    const onChangeText = useCallback((e: any) => {
        setText(e.target.value);
    }, []);
    
    return (
        <Translate
            options={options}
            language={language}
            text={text}
            onChangeDropdown={onChangeDropdown}
            onChangeText={onChangeText}
        />
    );
};

export { TranslateContainer as Translate };