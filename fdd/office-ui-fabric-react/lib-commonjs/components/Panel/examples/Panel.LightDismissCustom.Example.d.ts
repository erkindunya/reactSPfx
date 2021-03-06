/// <reference types="react" />
import * as React from 'react';
export interface IPanelLightDismissCustomExampleState {
    showPanel: boolean;
    hideDialog: boolean;
}
export declare class PanelLightDismissCustomExample extends React.Component<{}, IPanelLightDismissCustomExampleState> {
    state: IPanelLightDismissCustomExampleState;
    render(): JSX.Element;
    private _showPanel;
    private _hidePanel;
    private _showDialog;
    private _closeDialog;
    private _closeDialogAndHidePanel;
}
