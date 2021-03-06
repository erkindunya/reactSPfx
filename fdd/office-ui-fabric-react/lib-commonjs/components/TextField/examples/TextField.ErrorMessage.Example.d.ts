/// <reference types="react" />
import * as React from 'react';
export interface ITextFieldErrorMessageExampleState {
    /**
     * Screen readers will read all errors on a page as soon as they are present,
     * making this demo potentially unpleasant when using a screen reader.
     * Not rendering the controls by default makes for a more pleasant experience.
     */
    showFields: boolean;
}
export declare class TextFieldErrorMessageExample extends React.Component<{}, ITextFieldErrorMessageExampleState> {
    state: ITextFieldErrorMessageExampleState;
    render(): JSX.Element;
    private _toggleShowFields;
    private _getErrorMessage;
    private _getErrorMessagePromise;
}
