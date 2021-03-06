/// <reference types="react" />
import * as React from 'react';
export interface IPanelMediumExampleState {
    showPanel: boolean;
}
export declare class PanelMediumExample extends React.Component<{}, IPanelMediumExampleState> {
    state: {
        showPanel: boolean;
    };
    render(): JSX.Element;
    private _showPanel;
    private _hidePanel;
}
