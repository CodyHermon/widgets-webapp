import { Accordion } from "../containers/Accordion";
import { DropdownWidget } from "../containers/DropdownWidget";
import { Search } from "../containers/Search";

const App = () =>  {
    return (
        <div>
            <Accordion />
            {/* <Search /> */}
            <DropdownWidget />
        </div>
    );
};

export default App;