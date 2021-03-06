/// <reference types="react" />
import * as React from 'react';
export interface ILayerNestedLayersExampleState {
    hideDialog: boolean;
    showPanel: boolean;
}
export declare class LayerNestedLayersExample extends React.Component<{}, ILayerNestedLayersExampleState> {
    state: {
        hideDialog: boolean;
        showPanel: boolean;
    };
    render(): JSX.Element;
    private _showDialog;
    private _dismissDialog;
    private _dismissPanel;
    private _onShowPanel;
}
