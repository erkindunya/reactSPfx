/// <reference types="react" />
import * as React from 'react';
import './CalloutExample.scss';
import { DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
export interface ICalloutCoverExampleState {
    isCalloutVisible?: boolean;
    directionalHint?: DirectionalHint;
}
export declare class CalloutCoverExample extends React.Component<{}, ICalloutCoverExampleState> {
    private _menuButtonElement;
    constructor(props: {});
    render(): JSX.Element;
    private _onDismiss();
    private _onShowMenuClicked();
    private _onDirectionalChanged(event, option);
}
