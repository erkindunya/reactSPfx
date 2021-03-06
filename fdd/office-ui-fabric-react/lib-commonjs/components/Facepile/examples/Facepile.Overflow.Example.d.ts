/// <reference types="react" />
import * as React from 'react';
import { OverflowButtonType } from 'office-ui-fabric-react/lib/Facepile';
import './Facepile.Examples.scss';
export interface IFacepileOverflowExampleState {
    displayedPersonas: any;
    overflowButtonType: OverflowButtonType;
}
export declare class FacepileOverflowExample extends React.Component<{}, IFacepileOverflowExampleState> {
    constructor(props: {});
    render(): JSX.Element;
    private _onChangePersonaNumber;
    private _onChangeType;
}
