/// <reference types="react" />
import * as React from 'react';
export interface IPanelLargeFixedExampleState {
    showPanel: boolean;
}
export declare class PanelLargeFixedExample extends React.Component<{}, IPanelLargeFixedExampleState> {
    state: {
        showPanel: boolean;
    };
    render(): JSX.Element;
    private _showPanel;
    private _hidePanel;
}
