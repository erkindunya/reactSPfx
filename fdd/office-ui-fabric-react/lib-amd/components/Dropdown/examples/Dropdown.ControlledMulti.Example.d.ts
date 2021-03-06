/// <reference types="react" />
import * as React from 'react';
export interface IDropdownControlledMultiExampleState {
    selectedItems: string[];
}
export declare class DropdownControlledMultiExample extends React.Component<{}, IDropdownControlledMultiExampleState> {
    state: IDropdownControlledMultiExampleState;
    render(): JSX.Element;
    private _onChange;
}
