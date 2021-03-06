/// <reference types="react" />
import * as React from 'react';
export interface ITextFieldCustomRenderExampleState {
    isCalloutVisible: boolean;
}
export declare class TextFieldCustomRenderExample extends React.Component<{}, ITextFieldCustomRenderExampleState> {
    state: ITextFieldCustomRenderExampleState;
    private _descriptionId;
    private _iconButtonId;
    render(): JSX.Element;
    private _onRenderDescription;
    private _onRenderLabel;
    private _onIconClick;
    private _onDismiss;
}
