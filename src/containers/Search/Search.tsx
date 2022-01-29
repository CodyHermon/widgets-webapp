import { useState, useEffect } from 'react';
import axios from 'axios';

import { Search } from "../../components/Search";

const SearchContainer = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    useEffect (() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                },
            });
            setResults(data.query.search);
        };

        if (term && !results.length) {
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 500);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [term]);

    const onChangeTerm = (e: any) => {
        setTerm(e.target.value);
    };

    return (
        <Search 
            term={term}
            searchResults={results}
            onChangeTerm={onChangeTerm}        
        />
    );
};

export { SearchContainer as Search };