/// <reference types="react" />
import * as React from 'react';
import './ContextualMenuExample.scss';
import { IContextualMenuItem } from 'office-ui-fabric-react/lib/ContextualMenu';
export declare class ContextualMenuWithCustomMenuListExample extends React.Component<{}, {
    items: IContextualMenuItem[];
}> {
    constructor(props: {});
    render(): JSX.Element;
    private _onAbort;
    private _onChange;
    private _renderMenuList;
}
