/// <reference types="react" />
import * as React from 'react';
export interface IPanelSmallRightExampleState {
    showPanel: boolean;
}
export declare class PanelSmallRightExample extends React.Component<{}, IPanelSmallRightExampleState> {
    state: {
        showPanel: boolean;
    };
    render(): JSX.Element;
    private _onRenderFooterContent;
    private _showPanel;
    private _hidePanel;
}
