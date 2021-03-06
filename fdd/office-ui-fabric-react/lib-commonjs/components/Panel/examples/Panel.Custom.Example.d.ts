/// <reference types="react" />
import * as React from 'react';
export interface IPanelCustomExampleState {
    showPanel: boolean;
}
export declare class PanelCustomExample extends React.Component<{}, IPanelCustomExampleState> {
    state: {
        showPanel: boolean;
    };
    render(): JSX.Element;
    private _showPanel;
    private _hidePanel;
}
