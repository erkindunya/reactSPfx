/// <reference types="react" />
import { BaseComponent } from '../../../Utilities';
import { IShimmerCircleProps } from './ShimmerCircle.types';
export declare class ShimmerCircleBase extends BaseComponent<IShimmerCircleProps, {}> {
    private _classNames;
    constructor(props: IShimmerCircleProps);
    render(): JSX.Element;
}
