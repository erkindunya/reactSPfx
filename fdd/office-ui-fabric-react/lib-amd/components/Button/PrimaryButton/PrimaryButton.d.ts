/// <reference types="react" />
import { BaseComponent } from '../../../Utilities';
import { IButtonProps } from '../Button.types';
/**
 * {@docCategory Button}
 */
export declare class PrimaryButton extends BaseComponent<IButtonProps, {}> {
    /**
     * Set this BaseComponent._skipComponentRefResolution to true, bypassing resolution of componentRef.
     */
    protected _skipComponentRefResolution: boolean;
    render(): JSX.Element;
}
