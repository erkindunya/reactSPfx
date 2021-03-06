/// <reference types="react" />
import * as React from 'react';
import './ContextualMenuExample.scss';
export interface IContextualMenuMultiselectExampleState {
    selection?: {
        [key: string]: boolean;
    };
}
export declare class ContextualMenuCheckmarksExample extends React.Component<{}, IContextualMenuMultiselectExampleState> {
    constructor(props: {});
    render(): JSX.Element;
    private _onToggleSelect(ev?, item?);
}
