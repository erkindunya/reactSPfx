/// <reference types="react" />
import * as React from 'react';
export interface IDialogBasicExampleState {
    hideDialog: boolean;
    isDraggable: boolean;
}
export declare class DialogBasicExample extends React.Component<{}, IDialogBasicExampleState> {
    state: IDialogBasicExampleState;
    private _labelId;
    private _subTextId;
    private _dragOptions;
    render(): JSX.Element;
    private _showDialog;
    private _closeDialog;
    private _toggleDraggable;
}
