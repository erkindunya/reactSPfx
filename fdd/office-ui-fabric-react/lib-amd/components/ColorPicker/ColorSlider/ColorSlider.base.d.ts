/// <reference types="react" />
import * as React from 'react';
import { BaseComponent } from '../../../Utilities';
import { IColorSliderProps } from './ColorSlider.types';
/**
 * {@docCategory ColorPicker}
 */
export interface IColorSliderProps {
    componentRef?: () => void;
    minValue?: number;
    maxValue?: number;
    value?: number;
    thumbColor?: string;
    overlayStyle?: any;
    onChange?: (event: React.MouseEvent<HTMLElement>, newValue?: number) => void;
    onChanged?: (newValue: number) => void;
    className?: string;
    style?: any;
}
export interface IColorSliderState {
    isAdjusting?: boolean;
    origin?: {
        x: number;
        originalValue: number;
    };
    currentValue?: number;
}
/**
 * {@docCategory ColorPicker}
 */
export declare class ColorSliderBase extends BaseComponent<IColorSliderProps, IColorSliderState> {
    static defaultProps: {
        minValue: number;
        maxValue: number;
        thumbColor: string;
        value: number;
    };
    private _root;
    constructor(props: IColorSliderProps);
    componentWillReceiveProps(newProps: IColorSliderProps): void;
    render(): JSX.Element;
    private _onMouseDown;
    private _onMouseMove;
    private _onMouseUp;
}
