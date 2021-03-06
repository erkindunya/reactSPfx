/// <reference types="react" />
import * as React from 'react';
export interface IPanelPreventDefaultExampleState {
    showPanel: boolean;
    allowEsc: boolean;
}
export declare class PanelPreventDefaultExample extends React.Component<{}, IPanelPreventDefaultExampleState> {
    state: {
        showPanel: boolean;
        allowEsc: boolean;
    };
    render(): JSX.Element;
    private _onKeyDown;
    private _toggleAllowEsc;
    private _hidePanel;
    private _showPanel;
}
