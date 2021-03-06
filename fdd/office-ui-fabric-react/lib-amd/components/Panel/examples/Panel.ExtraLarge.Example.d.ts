/// <reference types="react" />
import * as React from 'react';
export interface IPanelExtraLargeExampleState {
    showPanel: boolean;
}
export declare class PanelExtraLargeExample extends React.Component<{}, IPanelExtraLargeExampleState> {
    state: {
        showPanel: boolean;
    };
    render(): JSX.Element;
    private _showPanel;
    private _hidePanel;
}
