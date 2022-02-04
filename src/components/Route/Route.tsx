interface Props {
    path: string;
    children: any;
    currentPath: any;
}

const Route = ({ path, children, currentPath }: Props) => (
    currentPath === path
    ? children
    : null
);

export { Route };