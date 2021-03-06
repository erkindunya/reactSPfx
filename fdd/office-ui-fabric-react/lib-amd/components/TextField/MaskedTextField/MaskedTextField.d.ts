/// <reference types="react" />
import * as React from 'react';
import { ITextField, ITextFieldProps } from '../TextField.types';
/**
 * State for the MaskedTextField component.
 */
export interface IMaskedTextFieldState {
    /**
     * The mask string formatted with the input value.
     * This is what is displayed inside the TextField
     * @example
     *  `Phone Number: 12_ - 4___`
     */
    displayValue: string;
    /** The index into the rendered value of the first unfilled format character */
    maskCursorPosition?: number;
}
export declare const DEFAULT_MASK_CHAR = "_";
export declare class MaskedTextField extends React.Component<ITextFieldProps, IMaskedTextFieldState> implements ITextField {
    static defaultProps: ITextFieldProps;
    /**
     * Tell BaseComponent to bypass resolution of componentRef.
     */
    protected _skipComponentRefResolution: boolean;
    private _textField;
    /**
     *  An array of data containing information regarding the format characters,
     *  their indices inside the display text, and their corresponding values.
     * @example
     * ```
     *  [
     *    { value: '1', displayIndex: 16, format: /[0-9]/ },
     *    { value: '2', displayIndex: 17, format: /[0-9]/ },
     *    { displayIndex: 18, format: /[0-9]/ },
     *    { value: '4', displayIndex: 22, format: /[0-9]/ },
     *    ...
     *  ]
     * ```
     */
    private _maskCharData;
    /** True if the TextField is focused */
    private _isFocused;
    /** True if the TextField was not focused and it was clicked into */
    private _moveCursorOnMouseUp;
    /** The stored selection data prior to input change events. */
    private _changeSelectionData;
    constructor(props: ITextFieldProps);
    componentWillReceiveProps(newProps: ITextFieldProps): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
    /**
     * @returns The value of all filled format characters or undefined if not all format characters are filled
     */
    readonly value: string | undefined;
    /**
     *
     */
    setValue(newValue: string): void;
    focus(): void;
    blur(): void;
    select(): void;
    setSelectionStart(value: number): void;
    setSelectionEnd(value: number): void;
    setSelectionRange(start: number, end: number): void;
    readonly selectionStart: number | null;
    readonly selectionEnd: number | null;
    private _onFocus(event);
    private _onBlur(event);
    private _onMouseDown(event);
    private _onMouseUp(event);
    private _onBeforeChange(value);
    private _onInputChange(ev, value);
    private _onKeyDown(event);
    private _onPaste(event);
}
