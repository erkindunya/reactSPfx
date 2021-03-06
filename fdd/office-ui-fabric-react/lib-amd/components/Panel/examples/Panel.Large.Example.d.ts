/// <reference types="react" />
import * as React from 'react';
export interface IPanelLargeExampleState {
    showPanel: boolean;
}
export declare class PanelLargeExample extends React.Component<{}, IPanelLargeExampleState> {
    state: {
        showPanel: boolean;
    };
    render(): JSX.Element;
    private _hidePanel;
    private _showPanel;
}
