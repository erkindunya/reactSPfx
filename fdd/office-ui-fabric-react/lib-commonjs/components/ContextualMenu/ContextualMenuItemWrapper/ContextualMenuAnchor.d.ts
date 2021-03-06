/// <reference types="react" />
import * as React from 'react';
import { ContextualMenuItemWrapper } from './ContextualMenuItemWrapper';
export declare class ContextualMenuAnchor extends ContextualMenuItemWrapper {
    private _anchor;
    render(): JSX.Element;
    protected _getSubmenuTarget: () => HTMLElement | undefined;
    protected _onItemClick: (ev: React.MouseEvent<HTMLElement>) => void;
}
