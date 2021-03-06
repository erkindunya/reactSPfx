import { IStyle } from '../../../Styling';
import { IBeakStylesProps } from './Beak.types';
export interface IBeakStyles {
    /**
     * Style for the root element in the default enabled/unchecked state.
     */
    root?: IStyle;
    beak?: IStyle;
}
export declare function getStyles(props: IBeakStylesProps): IBeakStyles;
