/// <reference types="react" />
import * as React from 'react';
export interface ITeachingBubbleCondensedExampleState {
    isTeachingBubbleVisible?: boolean;
}
export declare class TeachingBubbleCondensedExample extends React.Component<{}, ITeachingBubbleCondensedExampleState> {
    constructor(props: {});
    render(): JSX.Element;
    private _onDismiss(ev);
    private _onShow(ev);
}
