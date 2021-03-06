/// <reference types="react" />
import * as React from 'react';
export interface IDialogBlockingExampleState {
    hideDialog: boolean;
}
export declare class DialogBlockingExample extends React.Component<{}, IDialogBlockingExampleState> {
    state: IDialogBlockingExampleState;
    render(): JSX.Element;
    private _showDialog;
    private _closeDialog;
}
