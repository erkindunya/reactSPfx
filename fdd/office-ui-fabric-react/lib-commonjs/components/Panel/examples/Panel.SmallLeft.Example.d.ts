/// <reference types="react" />
import * as React from 'react';
export interface IPanelSmallLeftExampleState {
    showPanel: boolean;
}
export declare class PanelSmallLeftExample extends React.Component<{}, IPanelSmallLeftExampleState> {
    state: {
        showPanel: boolean;
    };
    render(): JSX.Element;
    private _showPanel;
    private _hidePanel;
}
