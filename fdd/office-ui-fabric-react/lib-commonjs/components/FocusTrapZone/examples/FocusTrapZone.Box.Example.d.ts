/// <reference types="react" />
import * as React from 'react';
export interface IFocusTrapZoneBoxExampleState {
    useTrapZone: boolean;
}
export declare class FocusTrapZoneBoxExample extends React.Component<{}, IFocusTrapZoneBoxExampleState> {
    state: IFocusTrapZoneBoxExampleState;
    private _toggle;
    render(): JSX.Element;
    private _onButtonClickHandler;
    private _onFocusTrapZoneToggleChanged;
}
