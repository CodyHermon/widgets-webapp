interface Props {
    className: string;
    href: string;
    children: any;
    onClick: (e: any) => void;
}

const Link = ({ className, href, children, onClick }: Props) => (
    <a className={className} href={href} onClick={onClick}>
        {children}
    </a>
);

export { Link };