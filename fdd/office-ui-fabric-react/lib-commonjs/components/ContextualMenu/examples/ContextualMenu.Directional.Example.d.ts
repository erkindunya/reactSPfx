/// <reference types="react" />
import * as React from 'react';
import { DirectionalHint } from 'office-ui-fabric-react/lib/ContextualMenu';
import './ContextualMenuExample.scss';
export interface IContextualMenuDirectionalExampleState {
    directionalHint?: DirectionalHint;
    directionalHintForRTL?: DirectionalHint;
    useDirectionalHintForRtl?: boolean;
    isBeakVisible?: boolean;
    gapSpace?: number;
    beakWidth?: number;
    edgeFixed?: boolean;
}
export declare class ContextualMenuDirectionalExample extends React.Component<{}, IContextualMenuDirectionalExampleState> {
    constructor(props: {});
    render(): JSX.Element;
    private _onShowBeakChange;
    private _onUseRtlHintChange;
    private _onDirectionalChanged;
    private _onDirectionalRtlChanged;
}
