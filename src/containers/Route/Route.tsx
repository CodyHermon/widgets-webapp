import { useEffect, useState } from "react";
import { Route } from "../../components/Route"

interface Props {
    path: string;
    children: any;
}

const RouteContainer = ({ path, children }: Props) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    return(
        <Route path={path} children={children} currentPath={currentPath} />
    );
};

export { RouteContainer as Route };