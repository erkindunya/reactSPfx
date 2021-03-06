/// <reference types="react" />
import * as React from 'react';
export interface IMarqueeSelectionBasicExampleState {
    isMarqueeEnabled: boolean;
}
export declare class MarqueeSelectionBasicExample extends React.Component<{}, IMarqueeSelectionBasicExampleState> {
    private _selection;
    private _isMounted;
    constructor(props: {});
    componentDidMount(): void;
    render(): JSX.Element;
    private _log(text);
    private _onChange;
}
