/// <reference types="react" />
import * as React from 'react';
export interface IPanelSmallFluidExampleState {
    showPanel: boolean;
}
export declare class PanelSmallFluidExample extends React.Component<{}, IPanelSmallFluidExampleState> {
    state: {
        showPanel: boolean;
    };
    render(): JSX.Element;
    private _showPanel;
    private _hidePanel;
}
