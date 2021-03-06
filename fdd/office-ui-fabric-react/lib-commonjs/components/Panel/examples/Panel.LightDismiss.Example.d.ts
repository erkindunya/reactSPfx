/// <reference types="react" />
import * as React from 'react';
export interface IPanelLightDismissExampleState {
    showPanel: boolean;
}
export declare class PanelLightDismissExample extends React.Component<{}, IPanelLightDismissExampleState> {
    state: {
        showPanel: boolean;
    };
    render(): JSX.Element;
    private _showPanel;
    private _hidePanel;
}
