/// <reference types="react" />
import { ContextualMenuItemWrapper } from './ContextualMenuItemWrapper';
export declare class ContextualMenuButton extends ContextualMenuItemWrapper {
    private _btn;
    render(): JSX.Element;
    protected _getSubmenuTarget: () => HTMLElement | undefined;
}
