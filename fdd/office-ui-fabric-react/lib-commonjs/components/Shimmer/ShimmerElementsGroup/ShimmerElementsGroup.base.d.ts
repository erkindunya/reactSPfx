/// <reference types="react" />
import { BaseComponent } from '../../../Utilities';
import { IShimmerElementsGroupProps } from './ShimmerElementsGroup.types';
/**
 * {@docCategory Shimmer}
 */
export declare class ShimmerElementsGroupBase extends BaseComponent<IShimmerElementsGroupProps, {}> {
    static defaultProps: IShimmerElementsGroupProps;
    private _classNames;
    constructor(props: IShimmerElementsGroupProps);
    render(): JSX.Element;
    private _getRenderedElements;
    private _getStyles;
    /**
     * User should not worry to provide which of the elements is the highest, we do the calculation for him.
     * Plus if user forgot to specify the height we assign their defaults.
     */
    private _findMaxElementHeight;
}
