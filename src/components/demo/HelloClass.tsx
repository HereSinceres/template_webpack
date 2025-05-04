import * as React from 'react';

export interface IAppProps {
    name?: string;
    age: number;
}

export interface IAppState {
    counter: number;
}

export class HelloC extends React.Component<IAppProps, IAppState> {
    static defaultProps = {
        name: 'world'
    };
    constructor(props: IAppProps) {
        super(props);

        this.state = {
            counter: 0
        };
    }

    public render() {
        return (
            <div>
                {this.props.age}/{this.props.name}
            </div>
        );
    }
}
