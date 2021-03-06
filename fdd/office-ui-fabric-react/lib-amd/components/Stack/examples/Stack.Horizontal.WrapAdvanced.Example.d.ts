/// <reference types="react" />
import * as React from 'react';
export declare type HorizontalAlignment = 'start' | 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly';
export declare type VerticalAlignment = 'start' | 'center' | 'end';
export declare type Overflow = 'visible' | 'auto' | 'hidden';
export interface IExampleState {
    stackWidth: number;
    containerHeight: number;
    horizontalAlignment: HorizontalAlignment;
    verticalAlignment: VerticalAlignment;
    overflow: Overflow;
}
export declare class HorizontalStackWrapAdvancedExample extends React.Component<{}, IExampleState> {
    constructor(props: {});
    render(): JSX.Element;
    private _onWidthChange;
    private _onHeightChange;
    private _onHorizontalAlignChange;
    private _onVerticalAlignChange;
    private _onOverflowChange;
}
