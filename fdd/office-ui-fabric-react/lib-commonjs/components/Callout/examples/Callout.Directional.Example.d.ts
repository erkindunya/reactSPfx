/// <reference types="react" />
import * as React from 'react';
import { DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
import './CalloutExample.scss';
export interface ICalloutDirectionalExampleState {
    isCalloutVisible?: boolean;
    directionalHint?: DirectionalHint;
    isBeakVisible?: boolean;
    gapSpace?: number;
    beakWidth?: number;
}
export declare class CalloutDirectionalExample extends React.Component<{}, ICalloutDirectionalExampleState> {
    private _menuButtonElement;
    constructor(props: {});
    render(): JSX.Element;
    private _onCalloutDismiss;
    private _onShowMenuClicked;
    private _onShowBeakChange;
    private _onDirectionalChanged;
    private _onGapSlider;
    private _onBeakWidthSlider;
}
