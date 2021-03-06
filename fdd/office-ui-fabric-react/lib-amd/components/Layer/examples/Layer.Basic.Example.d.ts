/// <reference types="react" />
import 'office-ui-fabric-react/lib/common/_exampleStyles.scss';
import { BaseComponent } from 'office-ui-fabric-react/lib/Utilities';
import * as PropTypes from 'prop-types';
export interface ILayerContentExampleState {
    time: string;
}
export declare class LayerContentExample extends BaseComponent<{}, ILayerContentExampleState> {
    static contextTypes: {
        message: PropTypes.Requireable<any>;
    };
    state: {
        time: string;
    };
    context: {
        message: string;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
export interface ILayerBasicExampleState {
    showLayer: boolean;
}
export declare class LayerBasicExample extends BaseComponent<{}, ILayerBasicExampleState> {
    static childContextTypes: {
        message: PropTypes.Requireable<any>;
    };
    state: {
        showLayer: boolean;
    };
    getChildContext(): {
        message: string;
    };
    render(): JSX.Element;
    private _onChange;
}
