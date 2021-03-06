/// <reference types="react" />
import * as React from 'react';
import { IButtonProps } from 'office-ui-fabric-react/lib/Button';
export interface IButtonToggleExampleState {
    muted: boolean;
}
export declare class ButtonToggleExample extends React.Component<IButtonProps, IButtonToggleExampleState> {
    constructor(props: {});
    render(): JSX.Element;
}
