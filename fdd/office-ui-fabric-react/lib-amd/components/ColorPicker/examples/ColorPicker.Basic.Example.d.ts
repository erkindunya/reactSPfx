/// <reference types="react" />
import * as React from 'react';
import { IColor } from 'office-ui-fabric-react/lib/index';
export interface IBasicColorPickerExampleState {
    color: IColor;
    alphaSliderHidden: boolean;
}
export declare class ColorPickerBasicExample extends React.Component<{}, IBasicColorPickerExampleState> {
    state: IBasicColorPickerExampleState;
    render(): JSX.Element;
    private _updateColor;
    private _onHideAlphaClick;
}
