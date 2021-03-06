/// <reference types="react" />
import * as React from 'react';
export interface IProgressIndicatorBasicExampleState {
    percentComplete: number;
}
export declare class ProgressIndicatorBasicExample extends React.Component<{}, IProgressIndicatorBasicExampleState> {
    private _interval;
    private _async;
    constructor(props: {});
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private _startProgressDemo();
}
