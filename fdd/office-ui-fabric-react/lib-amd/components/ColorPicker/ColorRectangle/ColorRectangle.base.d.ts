/// <reference types="react" />
import * as React from 'react';
import { BaseComponent } from '../../../Utilities';
import { IColor } from '../../../utilities/color/interfaces';
import { IColorRectangleProps, IColorRectangle } from './ColorRectangle.types';
export interface IColorRectangleState {
    color: IColor;
}
/**
 * {@docCategory ColorPicker}
 */
export declare class ColorRectangleBase extends BaseComponent<IColorRectangleProps, IColorRectangleState> implements IColorRectangle {
    static defaultProps: {
        minSize: number;
    };
    private _root;
    constructor(props: IColorRectangleProps);
    readonly color: IColor;
    componentWillReceiveProps(newProps: IColorRectangleProps): void;
    render(): JSX.Element;
    private _onMouseDown;
    private _onMouseMove;
    private _disableEvents;
}
/**
 * Exported for testing only.
 * @internal
 */
export declare function _getNewColor(ev: React.MouseEvent<HTMLElement>, prevColor: IColor, root: HTMLElement): IColor | undefined;
