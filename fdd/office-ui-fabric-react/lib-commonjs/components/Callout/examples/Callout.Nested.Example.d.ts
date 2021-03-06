/// <reference types="react" />
import * as React from 'react';
import { ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import './CalloutExample.scss';
export interface ICalloutNestedExampleProps {
    items: ICommandBarItemProps[];
}
export interface ICalloutNestedExampleState {
    isCalloutVisible: boolean;
}
export declare class CalloutNestedExample extends React.Component<ICalloutNestedExampleProps, ICalloutNestedExampleState> {
    state: ICalloutNestedExampleState;
    private _menuButtonElement;
    private _titleId;
    render(): JSX.Element;
    private _onDismiss;
}
