/// <reference types="react" />
import * as React from 'react';
import { BaseComponent } from '../../../Utilities';
import { IContextualMenuItemWrapperProps } from './ContextualMenuItemWrapper.types';
import { IContextualMenuItem } from '../../../ContextualMenu';
export declare class ContextualMenuItemWrapper extends BaseComponent<IContextualMenuItemWrapperProps> {
    shouldComponentUpdate(newProps: IContextualMenuItemWrapperProps): boolean;
    protected _onItemMouseEnter: (ev: React.MouseEvent<HTMLElement>) => void;
    protected _onItemClick: (ev: React.MouseEvent<HTMLElement>) => void;
    protected _onItemMouseLeave: (ev: React.MouseEvent<HTMLElement>) => void;
    protected _onItemKeyDown: (ev: React.KeyboardEvent<HTMLElement>) => void;
    protected _onItemMouseMove: (ev: React.MouseEvent<HTMLElement>) => void;
    protected _getSubMenuId: (item: IContextualMenuItem) => string | undefined;
    protected _getSubmenuTarget: () => HTMLElement | undefined;
}
