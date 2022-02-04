import { useCallback } from "react";
import { Link } from "../../components/Link";

interface Props {
    className: string;
    href: string;
    children: any;
}

const LinkContainer = ({ className, href, children }: Props) => {
    const onClick = useCallback((e: any) => {
        //open new tab if cmd or ctrl click
        if (e.metaKey || e.ctrlKey) {
            return;
        }

        e.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }, [href]);

    return (
        <Link className={className} href={href} children={children} onClick={onClick} />
    );
};

export { LinkContainer as Link };