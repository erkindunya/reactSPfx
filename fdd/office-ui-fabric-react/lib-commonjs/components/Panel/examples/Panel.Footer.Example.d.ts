/// <reference types="react" />
import * as React from 'react';
export interface IPanelFooterExampleState {
    showPanel: boolean;
}
export declare class PanelFooterExample extends React.Component<{}, IPanelFooterExampleState> {
    state: {
        showPanel: boolean;
    };
    render(): JSX.Element;
    private _onRenderFooterContent;
    private _showPanel;
    private _hidePanel;
}
