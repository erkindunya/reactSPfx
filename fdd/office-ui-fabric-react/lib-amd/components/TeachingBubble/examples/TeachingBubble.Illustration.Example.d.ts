/// <reference types="react" />
import * as React from 'react';
export interface ITeachingBubbleIllustrationExampleState {
    isTeachingBubbleVisible?: boolean;
}
export declare class TeachingBubbleIllustrationExample extends React.Component<{}, ITeachingBubbleIllustrationExampleState> {
    private _menuButtonElement;
    constructor(props: {});
    render(): JSX.Element;
    private _onDismiss(ev);
    private _onShow(ev);
}
