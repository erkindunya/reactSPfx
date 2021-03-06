/// <reference types="react" />
import * as React from 'react';
export interface IKeytipsCommandBarExampleState {
    showModal: boolean;
    showMessageBar: boolean;
}
export declare class KeytipsCommandBarExample extends React.Component<{}, IKeytipsCommandBarExampleState> {
    constructor(props: {});
    render(): JSX.Element;
    private _showModal;
    private _hideModal;
    private _showMessageBar;
    private _hideMessageBar;
}
