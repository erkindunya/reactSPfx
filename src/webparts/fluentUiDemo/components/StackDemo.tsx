import * as React from 'react';
import styles from './FluentUiDemo.module.scss';

import { Stack, IStackTokens, IStackItemStyles, Fabric, IStackStyles  } from "office-ui-fabric-react";

const stackStyles : IStackStyles = {
    root: {
        backgroundColor: "lightgreen",
        padding: 10
    }
};

const itemStyles : IStackItemStyles = {
    root: {
        padding: 5,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "lightgray"
    }
};

const tokens : IStackTokens = {
    childrenGap: 20
};


export default class StackDemo extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <Fabric>
                <Stack styles={ stackStyles } tokens={ tokens }>
                    <Stack.Item styles={ itemStyles }>
                        <div>Row 1</div>
                    </Stack.Item>
                    <Stack.Item styles={ itemStyles }>
                        <div> Row 2</div>
                    </Stack.Item>
                    <Stack.Item styles={ itemStyles }>
                        <div> Row 3</div>
                    </Stack.Item>
                </Stack>
            </Fabric>
        );
    }
}