/// <reference types="react" />
import * as React from 'react';
export interface IPanelScrollExampleState {
    showPanel: boolean;
}
export declare class PanelScrollExample extends React.Component<{}, IPanelScrollExampleState> {
    state: {
        showPanel: boolean;
    };
    render(): JSX.Element;
    private _onRenderFooterContent;
    private _showPanel;
    private _hidePanel;
}
