/// <reference types="react" />
import * as React from 'react';
export interface IPanelHandleDismissTargetExampleState {
    showPanel: boolean;
}
export declare class PanelHandleDismissTargetExample extends React.Component<{}, IPanelHandleDismissTargetExampleState> {
    state: {
        showPanel: boolean;
    };
    render(): JSX.Element;
    private _onRenderFooterContent;
    private _showPanel;
    private _hidePanel;
    private _onDismiss;
}
