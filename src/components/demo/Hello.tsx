type Props = {
    name: string;
};

export const Hello = (props: Props) => {
    return <div>Hello {props.name}, </div>;
};

Hello.defaultProps = {
    name: 'World'
};
