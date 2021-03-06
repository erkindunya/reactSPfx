/// <reference types="react" />
import * as React from 'react';
export interface IDropdownErrorExampleState {
    showError: boolean;
}
export declare class DropdownErrorExample extends React.Component<{}, IDropdownErrorExampleState> {
    state: IDropdownErrorExampleState;
    render(): JSX.Element;
    private _updateShowError;
}
