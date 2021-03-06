/// <reference types="react" />
import * as React from 'react';
import { ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import './CalloutExample.scss';
export interface ICalloutFocusTrapExampleProps {
    items: ICommandBarItemProps[];
}
export interface ICalloutFocusTrapExampleState {
    isCalloutVisible: boolean;
}
export declare class CalloutFocusTrapExample extends React.Component<ICalloutFocusTrapExampleProps, ICalloutFocusTrapExampleState> {
    state: ICalloutFocusTrapExampleState;
    private _menuButtonElement;
    private _titleId;
    render(): JSX.Element;
    private _onDismiss;
}
