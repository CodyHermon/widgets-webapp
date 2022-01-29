import classes from './search.module.css';

interface Props {
    term: string;
    searchResults: any[];
    onChangeTerm: (e: any) => void;
}

const Search = ({ term, searchResults, onChangeTerm }: Props) => (
    <div>
        <div className={classes.uiForm}>
            <div className={classes.field}>
                <label className={classes.searchInputLabel}>Enter Search Term</label>
                <div className={classes.inputContainer}>
                    <input 
                        className={classes.searchInput}
                        value={term}
                        onChange={onChangeTerm}
                    />
                </div>
            </div>
        </div>
        <div className={classes.resultsList}>
        {searchResults.map((result) => ( 
            <div key={result.pageid} className={classes.result}>
                <div className={classes.resultInfo}>
                    <div className={classes.resultTitle}>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
                </div>
                <a className={classes.buttonContainer} href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                    <button className={classes.button}>Go</button>
                </a>
            </div>
            ))
        }
        </div>
    </div>
);

export { Search };