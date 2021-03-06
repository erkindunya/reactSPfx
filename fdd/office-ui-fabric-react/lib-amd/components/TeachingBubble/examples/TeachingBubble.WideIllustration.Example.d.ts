/// <reference types="react" />
import * as React from 'react';
export interface ITeachingBubbleWideIllustrationExampleState {
    isTeachingBubbleVisible?: boolean;
}
export declare class TeachingBubbleWideIllustrationExample extends React.Component<{}, ITeachingBubbleWideIllustrationExampleState> {
    private _menuButtonElement;
    constructor(props: {});
    render(): JSX.Element;
    private _onDismiss(ev);
    private _onShow(ev);
}
