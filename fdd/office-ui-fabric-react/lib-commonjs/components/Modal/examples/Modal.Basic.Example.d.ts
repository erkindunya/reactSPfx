/// <reference types="react" />
import * as React from 'react';
export interface IModalBasicExampleState {
    showModal: boolean;
    isDraggable: boolean;
}
export declare class ModalBasicExample extends React.Component<{}, IModalBasicExampleState> {
    state: IModalBasicExampleState;
    private _titleId;
    private _subtitleId;
    private _dragOptions;
    render(): JSX.Element;
    private _showModal;
    private _closeModal;
    private _toggleDraggable;
}
