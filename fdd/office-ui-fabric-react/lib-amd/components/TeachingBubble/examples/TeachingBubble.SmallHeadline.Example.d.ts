/// <reference types="react" />
import * as React from 'react';
export interface ITeachingBubbleSmallHeadlineExampleState {
    isTeachingBubbleVisible?: boolean;
}
export declare class TeachingBubbleSmallHeadlineExample extends React.Component<{}, ITeachingBubbleSmallHeadlineExampleState> {
    private _menuButtonElement;
    constructor(props: {});
    render(): JSX.Element;
    private _onDismiss(ev);
    private _onShow(ev);
}
