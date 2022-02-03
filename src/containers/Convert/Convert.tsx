import { useEffect, useState } from "react";
import axios from "axios";

import { Convert } from "../../components/Convert";

interface Props {
    language: any;
    text: string;
}

const ConvertContainer = ({ language, text }: Props) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            
            setTranslated(data.data.translations[0].translatedText);
        };
        
        doTranslation();
    }, [language, debouncedText]);

    return (
        <Convert
            translatedText={translated}
        />
    );
};

export { ConvertContainer as Convert };