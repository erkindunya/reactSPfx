/// <reference types="react" />
import * as React from 'react';
export declare class ComboBoxCustomStyledExample extends React.Component<any, any> {
    private _optionsWithCustomStyling;
    private _optionsForCustomRender;
    private _fontMapping;
    constructor(props: any);
    render(): JSX.Element;
    /**
     * Render function for non-header/divider options in the second example.
     */
    private _onRenderOption;
}
