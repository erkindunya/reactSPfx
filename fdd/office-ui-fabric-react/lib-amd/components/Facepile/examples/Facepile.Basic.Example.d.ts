/// <reference types="react" />
import * as React from 'react';
import { PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import './Facepile.Examples.scss';
export interface IFacepileBasicExampleState {
    numberOfFaces: any;
    imagesFadeIn: boolean;
    personaSize: PersonaSize;
}
export declare class FacepileBasicExample extends React.Component<{}, IFacepileBasicExampleState> {
    constructor(props: {});
    render(): JSX.Element;
    private _onChangeFadeIn;
    private _onChangePersonaNumber;
    private _onChangePersonaSize;
}
