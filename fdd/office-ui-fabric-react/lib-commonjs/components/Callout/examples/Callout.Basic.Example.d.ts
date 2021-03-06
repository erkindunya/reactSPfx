/// <reference types="react" />
import * as React from 'react';
export interface ICalloutBasicExampleState {
    isCalloutVisible?: boolean;
}
export declare class CalloutBasicExample extends React.Component<{}, ICalloutBasicExampleState> {
    state: ICalloutBasicExampleState;
    private _menuButtonElement;
    private _labelId;
    private _descriptionId;
    render(): JSX.Element;
    private _onShowMenuClicked;
    private _onCalloutDismiss;
}
