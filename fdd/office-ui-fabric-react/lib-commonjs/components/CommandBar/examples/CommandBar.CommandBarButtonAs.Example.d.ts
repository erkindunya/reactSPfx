/// <reference types="react" />
import * as React from 'react';
export interface IIndividualCommandBarButtonAsExampleProps {
    onDismissCoachmark: () => void;
    isCoachmarkVisible: boolean;
}
export interface IIndividualCommandBarButtonAsExampleWrapperState {
    isCoachmarkVisible: boolean;
}
export declare class IndividualCommandBarButtonAsExample extends React.Component<IIndividualCommandBarButtonAsExampleProps> {
    render(): JSX.Element;
    private _getItems;
    private getOverlflowItems;
    private getFarItems;
}
export declare class IndividualCommandBarButtonAsExampleWrapper extends React.Component<{}, IIndividualCommandBarButtonAsExampleWrapperState> {
    constructor(props: {});
    render(): JSX.Element;
    private _onDismissCoachmark;
}
