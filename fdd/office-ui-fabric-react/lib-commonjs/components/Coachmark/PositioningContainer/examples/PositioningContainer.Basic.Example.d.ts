/// <reference types="react" />
import * as React from 'react';
export interface IPositioningContainerBasicExampleState {
    isPositioningContainerVisible?: boolean;
}
export declare class PositioningContainerBasicExample extends React.Component<{}, IPositioningContainerBasicExampleState> {
    constructor(props: {});
    render(): JSX.Element;
    private _onShowMenuClicked();
    private _onDismiss();
}
