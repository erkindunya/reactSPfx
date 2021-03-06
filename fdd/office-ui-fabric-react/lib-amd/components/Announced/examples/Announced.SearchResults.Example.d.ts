/// <reference types="react" />
import * as React from 'react';
export interface IAnnouncedSearchResultsExampleState {
    seconds: number;
    numberOfSuggestions: number;
    emptyInput: boolean;
}
export declare class AnnouncedSearchResultsExample extends React.Component<{}, IAnnouncedSearchResultsExampleState> {
    private _async;
    constructor(props: {});
    render(): JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private _renderAnnounced();
    private _getTextFromItem;
    private _onFilterChanged;
    private _listContainsDocument(tag, tagList);
}
