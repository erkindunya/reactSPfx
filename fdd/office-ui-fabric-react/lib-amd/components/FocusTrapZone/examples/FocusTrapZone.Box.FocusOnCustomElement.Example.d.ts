/// <reference types="react" />
import * as React from 'react';
export interface IFocusTrapZoneBoxCustomElementExampleState {
    useTrapZone: boolean;
}
export declare class FocusTrapZoneBoxCustomElementExample extends React.Component<{}, IFocusTrapZoneBoxCustomElementExampleState> {
    state: IFocusTrapZoneBoxCustomElementExampleState;
    private _toggle;
    render(): JSX.Element;
    private _onButtonClickHandler;
    private _onFocusTrapZoneToggleChanged;
}
