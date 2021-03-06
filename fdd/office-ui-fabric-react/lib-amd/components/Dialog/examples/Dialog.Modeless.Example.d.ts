/// <reference types="react" />
import * as React from 'react';
export interface IDialogModelessExampleState {
    hideDialog: boolean;
    isDraggable: boolean;
}
export declare class DialogModelessExample extends React.Component<{}, IDialogModelessExampleState> {
    state: IDialogModelessExampleState;
    private _dragOptions;
    render(): JSX.Element;
    private _showDialog;
    private _closeDialog;
    private _toggleDraggable;
}
