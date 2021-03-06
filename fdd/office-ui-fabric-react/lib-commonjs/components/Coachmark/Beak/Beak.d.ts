/// <reference types="react" />
import { BaseComponent } from '../../../Utilities';
import { IBeakProps } from './Beak.types';
export declare const BEAK_HEIGHT = 10;
export declare const BEAK_WIDTH = 18;
export declare class Beak extends BaseComponent<IBeakProps, {}> {
    constructor(props: IBeakProps);
    render(): JSX.Element;
}
