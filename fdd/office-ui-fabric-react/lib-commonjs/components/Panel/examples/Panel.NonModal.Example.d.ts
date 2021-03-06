/// <reference types="react" />
import * as React from 'react';
export interface IPanelNonModalExampleState {
    showPanel: boolean;
}
export declare class PanelNonModalExample extends React.Component<{}, IPanelNonModalExampleState> {
    state: {
        showPanel: boolean;
    };
    render(): JSX.Element;
    private _showPanel;
    private _hidePanel;
}
