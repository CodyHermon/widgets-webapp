import { Link } from '../../containers/Link';

import classes from './header.module.css';

const Header = () => (
    <div className={classes.container}>
        <Link href='/' className={classes.item}>
            Accordion
        </Link>
        <Link href='/list' className={classes.item}>
            Search
        </Link>
        <Link href='/dropdown' className={classes.item}>
            Dropdown
        </Link>
        <Link href='/translate' className={classes.item}>
            Translate
        </Link>
    </div>
);

export { Header };