/// <reference types="react" />
import * as React from 'react';
export interface IFocusTrapZoneNestedExampleState {
    activeStates: {
        [key: number]: boolean;
    };
}
export declare class FocusTrapZoneNestedExample extends React.Component<{}, IFocusTrapZoneNestedExampleState> {
    state: IFocusTrapZoneNestedExampleState;
    render(): JSX.Element;
    private _setIsActive;
    private _randomize;
}
