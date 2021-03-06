/// <reference types="react" />
import * as React from 'react';
/**
 * Interface for ChoiceGroupLabelExample state.
 */
export interface IChoiceGroupLabelExampleState {
    imageKey: string;
}
export declare class ChoiceGroupLabelExample extends React.Component<{}, IChoiceGroupLabelExampleState> {
    state: IChoiceGroupLabelExampleState;
    private _labelId;
    render(): JSX.Element;
    private _onChange;
}
