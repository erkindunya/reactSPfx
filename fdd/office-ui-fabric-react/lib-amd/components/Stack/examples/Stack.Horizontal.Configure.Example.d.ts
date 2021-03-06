/// <reference types="react" />
import * as React from 'react';
export declare type HorizontalAlignment = 'start' | 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly';
export declare type VerticalAlignment = 'start' | 'center' | 'end';
export interface IExampleState {
    numItems: number;
    showBoxShadow: boolean;
    preventOverflow: boolean;
    wrap: boolean;
    wrapperWidth: number;
    disableShrink: boolean;
    columnGap: number;
    rowGap: number;
    paddingLeft: number;
    paddingRight: number;
    paddingTop: number;
    paddingBottom: number;
    horizontalAlignment: HorizontalAlignment;
    verticalAlignment: VerticalAlignment;
    hideEmptyChildren: boolean;
    emptyChildren: string[];
}
export declare class HorizontalStackConfigureExample extends React.Component<{}, IExampleState> {
    constructor(props: {});
    render(): JSX.Element;
    private _onNumItemsChange;
    private _range;
    private _onBoxShadowChange;
    private _onPreventOverflowChange;
    private _onWrapChange;
    private _onShrinkChange;
    private _onWrapperWidthChange;
    private _onGapChange;
    private _onVerticalGapChange;
    private _onPaddingLeftChange;
    private _onPaddingRightChange;
    private _onPaddingTopChange;
    private _onPaddingBottomChange;
    private _onHorizontalAlignChange;
    private _onVerticalAlignChange;
    private _onHideEmptyChildrenChange;
    private _onEmptyChildrenChange;
}
