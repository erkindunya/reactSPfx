/// <reference types="react" />
import * as React from 'react';
export interface ILayerHostedExampleState {
    showLayer: boolean;
    showLayerNoId: boolean;
    showHost: boolean;
}
export declare class LayerHostedExample extends React.Component<{}, ILayerHostedExampleState> {
    state: ILayerHostedExampleState;
    private _layerHostId;
    render(): JSX.Element;
    private _log(text);
    private _onChangeCheckbox;
    private _onChangeCheckboxNoId;
    private _onChangeToggle;
}
