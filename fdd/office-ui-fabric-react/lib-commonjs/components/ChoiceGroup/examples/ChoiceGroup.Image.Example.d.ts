/// <reference types="react" />
import * as React from 'react';
/**
 * Interface for ChoiceGroupImageExample state.
 */
export interface IChoiceGroupImageExampleState {
    selectedKey: string;
}
export declare class ChoiceGroupImageExample extends React.Component<{}, IChoiceGroupImageExampleState> {
    constructor(props: {});
    render(): JSX.Element;
    private _onImageChoiceGroupChange(ev, option);
}
