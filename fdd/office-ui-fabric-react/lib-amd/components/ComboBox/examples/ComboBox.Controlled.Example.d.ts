/// <reference types="react" />
import * as React from 'react';
import { IComboBoxOption } from 'office-ui-fabric-react/lib/index';
export interface IComboBoxControlledExampleState {
    /** Current options for the single-select example */
    options: IComboBoxOption[];
    /** Current selected option for the single-select example */
    selectedOptionKey?: string | number;
    /**
     * Initial display value for the single-select example.
     * This will be cleared after the options are resolved for the first time.
     */
    initialDisplayValue?: string;
    /** Current options for the multi-select example */
    optionsMulti: IComboBoxOption[];
    /** Current selected options for the multi-select example */
    selectedOptionKeys?: string[];
    /**
     * Initial display value for the multi-select example.
     * This will be cleared after the options are resolved for the first time.
     */
    initialDisplayValueMulti?: string;
}
export declare class ComboBoxControlledExample extends React.Component<{}, IComboBoxControlledExampleState> {
    constructor(props: {});
    render(): JSX.Element;
    private _getOptions;
    private _getOptionsMulti;
    private _onChange;
    private _onChangeMulti;
    private _updateSelectedOptionKeys;
}
