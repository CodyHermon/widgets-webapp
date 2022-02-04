import { Accordion } from "../containers/Accordion";
import { Search } from "../containers/Search";
import { Dropdown } from "../containers/Dropdown";
import { Translate } from "../containers/Translate";
import { Route } from "../containers/Route";
import { Header } from '../components/Header';

const App = () =>  {
    return (
        <div>
            <Header />
            <Route path='/'>
                <Accordion />
            </Route>
            <Route path='/list'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    );
};

export default App;