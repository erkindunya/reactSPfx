/// <reference types="react" />
import * as React from 'react';
import { ContextualMenuItemWrapper } from './ContextualMenuItemWrapper';
export interface IContextualMenuSplitButtonState {
}
export declare class ContextualMenuSplitButton extends ContextualMenuItemWrapper {
    private _splitButton;
    private _lastTouchTimeoutId;
    private _processingTouch;
    componentDidMount(): void;
    render(): JSX.Element | null;
    protected _onItemKeyDown: (ev: React.KeyboardEvent<HTMLElement>) => void;
    protected _getSubmenuTarget: () => HTMLElement | undefined;
    private _renderSplitPrimaryButton(item, classNames, index, hasCheckmarks, hasIcons);
    private _renderSplitDivider(item);
    private _renderSplitIconButton(item, classNames, index, keytipAttributes);
    private _onItemMouseEnterPrimary;
    private _onItemMouseEnterIcon;
    private _onItemMouseMovePrimary;
    private _onItemMouseMoveIcon;
    private _onIconItemClick;
    private _executeItemClick;
    private _onTouchStart;
    private _onPointerDown;
    private _handleTouchAndPointerEvent(ev);
}
