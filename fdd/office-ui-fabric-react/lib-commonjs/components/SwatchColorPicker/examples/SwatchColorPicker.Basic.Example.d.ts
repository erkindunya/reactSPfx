/// <reference types="react" />
import * as React from 'react';
export interface IBasicSwatchColorPickerExampleState {
    color: string | undefined;
    previewColor: string | undefined;
    color2: string | undefined;
    previewColor2: string | undefined;
}
export declare class SwatchColorPickerBasicExample extends React.Component<any, IBasicSwatchColorPickerExampleState> {
    constructor(props: any);
    render(): JSX.Element;
}
