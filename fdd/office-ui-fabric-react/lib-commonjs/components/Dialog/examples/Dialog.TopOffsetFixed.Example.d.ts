/// <reference types="react" />
import * as React from 'react';
export interface IDialogTopOffsetFixedExampleState {
    hideDialog: boolean;
    optionSelected: string;
}
export declare class DialogTopOffsetFixedExample extends React.Component<{}, IDialogTopOffsetFixedExampleState> {
    state: IDialogTopOffsetFixedExampleState;
    render(): JSX.Element;
    private _onChange;
    private _showDialog;
    private _closeDialog;
}
