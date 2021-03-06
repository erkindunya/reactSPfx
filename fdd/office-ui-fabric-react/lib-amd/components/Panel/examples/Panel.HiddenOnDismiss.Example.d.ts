/// <reference types="react" />
import * as React from 'react';
export interface IPanelHiddenOnDismissExampleState {
    showPanel: boolean;
}
export declare class PanelHiddenOnDismissExample extends React.Component<{}, IPanelHiddenOnDismissExampleState> {
    state: {
        showPanel: boolean;
    };
    render(): JSX.Element;
    private _showPanel;
    private _hidePanel;
}
