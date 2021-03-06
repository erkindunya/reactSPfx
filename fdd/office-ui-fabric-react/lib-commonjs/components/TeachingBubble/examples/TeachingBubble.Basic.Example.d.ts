/// <reference types="react" />
import * as React from 'react';
export interface ITeachingBubbleBasicExampleState {
    isTeachingBubbleVisible?: boolean;
}
export declare class TeachingBubbleBasicExample extends React.Component<{}, ITeachingBubbleBasicExampleState> {
    private _menuButtonElement;
    constructor(props: {});
    render(): JSX.Element;
    private _onDismiss(ev);
    private _onShow(ev);
}
