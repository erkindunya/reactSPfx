/// <reference types="react" />
import * as React from 'react';
export interface ITextFieldControlledExampleState {
    value1: string;
    value2: string;
}
export declare class TextFieldControlledExample extends React.Component<{}, ITextFieldControlledExampleState> {
    state: ITextFieldControlledExampleState;
    render(): JSX.Element;
    private _onChange1;
    private _onChange2;
}
