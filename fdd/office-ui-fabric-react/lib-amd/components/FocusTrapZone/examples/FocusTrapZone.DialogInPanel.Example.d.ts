/// <reference types="react" />
import * as React from 'react';
export interface IFocusTrapZoneDialogInPanelExampleState {
    hideDialog: boolean;
    showPanel: boolean;
}
export declare class FocusTrapZoneDialogInPanelExample extends React.Component<{}, IFocusTrapZoneDialogInPanelExampleState> {
    state: IFocusTrapZoneDialogInPanelExampleState;
    render(): JSX.Element;
    private _showDialog;
    private _closeDialog;
    private _onClosePanel;
    private _onShowPanel;
}
