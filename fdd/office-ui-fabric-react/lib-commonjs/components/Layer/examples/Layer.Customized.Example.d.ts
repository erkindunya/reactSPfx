/// <reference types="react" />
import * as React from 'react';
export interface ILayerCustomizedExampleState {
    showPanel: boolean;
    trapPanel: boolean;
}
export declare class LayerCustomizedExample extends React.Component<{}, ILayerCustomizedExampleState> {
    state: ILayerCustomizedExampleState;
    private _layerHostId;
    render(): JSX.Element;
    private _onDismissPanel;
    private _onShowPanelChange;
    private _onTrapPanelChange;
}
