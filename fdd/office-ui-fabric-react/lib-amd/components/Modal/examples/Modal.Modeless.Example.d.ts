/// <reference types="react" />
import * as React from 'react';
export interface IModalModelessExampleState {
    showModal: boolean;
    isDraggable: boolean;
}
export declare class ModalModelessExample extends React.Component<{}, IModalModelessExampleState> {
    state: IModalModelessExampleState;
    private _titleId;
    private _subtitleId;
    private _dragOptions;
    render(): JSX.Element;
    private _showModal;
    private _closeModal;
    private _toggleDraggable;
}
