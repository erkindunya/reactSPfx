/// <reference types="react" />
import * as React from 'react';
export interface IDropdownControlledExampleState {
    selectedItem?: {
        key: string | number | undefined;
    };
}
export declare class DropdownControlledExample extends React.Component<{}, IDropdownControlledExampleState> {
    state: IDropdownControlledExampleState;
    render(): JSX.Element;
    private _onChange;
}
