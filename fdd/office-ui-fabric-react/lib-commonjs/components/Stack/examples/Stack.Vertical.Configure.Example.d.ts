/// <reference types="react" />
import * as React from 'react';
export declare type VerticalAlignment = 'start' | 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly';
export declare type HorizontalAlignment = 'start' | 'center' | 'end';
export interface IExampleState {
    numItems: number;
    showBoxShadow: boolean;
    preventOverflow: boolean;
    disableShrink: boolean;
    wrap: boolean;
    stackHeight: number;
    autoHeight: boolean;
    childrenGap: number;
    paddingLeft: number;
    paddingRight: number;
    paddingTop: number;
    paddingBottom: number;
    verticalAlignment: VerticalAlignment;
    horizontalAlignment: HorizontalAlignment;
    hideEmptyChildren: boolean;
    emptyChildren: string[];
}
export declare class VerticalStackConfigureExample extends React.Component<{}, IExampleState> {
    constructor(props: {});
    render(): JSX.Element;
    private _range;
    private _onNumItemsChange;
    private _onBoxShadowChange;
    private _onPreventOverflowChange;
    private _onShrinkItemsChange;
    private _onWrapChange;
    private _onStackHeightChange;
    private _onAutoHeightChange;
    private _onGapChange;
    private _onPaddingLeftChange;
    private _onPaddingRightChange;
    private _onPaddingTopChange;
    private _onPaddingBottomChange;
    private _onVerticalAlignChange;
    private _onHorizontalAlignChange;
    private _onHideEmptyChildrenChange;
    private _onEmptyChildrenChange;
}
