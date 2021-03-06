/// <reference types="react" />
import * as React from 'react';
import { IChoiceGroupOptionProps } from './ChoiceGroupOption.types';
/**
 * {@docCategory ChoiceGroup}
 */
export declare class ChoiceGroupOptionBase extends React.Component<IChoiceGroupOptionProps, any> {
    private _inputElement;
    private _classNames;
    render(): JSX.Element;
    private _onChange(props, evt);
    private _onBlur(props, evt);
    private _onFocus(props, evt);
    private _onRenderField;
    private _onRenderLabel;
}
