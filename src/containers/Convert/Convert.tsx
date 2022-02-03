import { useEffect, useState } from "react";
import axios from "axios";

import { Convert } from "../../components/Convert";

interface Props {
    language: any;
    text: string;
}

const ConvertContainer = ({ language, text }: Props) => {
    const [translated, setTranslated] = useState('');

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: text,
                    target: language,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            
            setTranslated(data.data.translations[0].translatedText);
        };
        
        doTranslation();
    }, [language, text]);

    return (
        <Convert
            translatedText={translated}
        />
    );
};

export { ConvertContainer as Convert };