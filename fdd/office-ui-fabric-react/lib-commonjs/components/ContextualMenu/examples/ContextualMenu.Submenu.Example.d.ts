/// <reference types="react" />
import * as React from 'react';
import './ContextualMenuExample.scss';
export interface IContextualMenuSubmenuExampleState {
    hoverDelay: number;
}
export declare class ContextualMenuSubmenuExample extends React.Component<any, IContextualMenuSubmenuExampleState> {
    constructor(props: any);
    render(): JSX.Element;
    private _onHoverDelayChanged;
}
