/// <reference types="react" />
import { BaseComponent } from '../../../Utilities';
import { IButtonProps } from '../Button.types';
/**
 * {@docCategory Button}
 */
export declare class DefaultButton extends BaseComponent<IButtonProps, {}> {
    /**
     * Tell BaseComponent to bypass resolution of componentRef.
     */
    protected _skipComponentRefResolution: boolean;
    render(): JSX.Element;
}
