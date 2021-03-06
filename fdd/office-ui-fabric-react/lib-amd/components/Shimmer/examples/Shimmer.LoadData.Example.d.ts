/// <reference types="react" />
import * as React from 'react';
import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';
export interface IShimmerLoadDataExampleState {
    isDataLoadedOne?: boolean;
    isDataLoadedTwo?: boolean;
    contentOne?: string;
    examplePersona?: IPersonaProps;
}
export declare class ShimmerLoadDataExample extends React.Component<{}, IShimmerLoadDataExampleState> {
    constructor(props: {});
    render(): JSX.Element;
    private _getContentOne;
    private _getContentTwo;
    private _getCustomElements;
}
