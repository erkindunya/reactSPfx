/// <reference types="react" />
import * as React from 'react';
export interface IDialogLargeHeaderExampleState {
    hideDialog: boolean;
}
export declare class DialogLargeHeaderExample extends React.Component<{}, IDialogLargeHeaderExampleState> {
    state: IDialogLargeHeaderExampleState;
    render(): JSX.Element;
    private _showDialog;
    private _closeDialog;
}
