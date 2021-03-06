/// <reference types="react" />
import * as React from 'react';
import { IDocumentCardActionsProps, IDocumentCardPreviewProps, IDocumentCardProps, IDocumentCardTitleProps, IDocumentCardActivityProps } from 'office-ui-fabric-react/lib/DocumentCard';
import { IBasePickerProps, BasePickerListBelow, IPickerItemProps, ISuggestionItemProps } from 'office-ui-fabric-react/lib/Pickers';
export interface IPeoplePickerExampleState {
    contextualMenuVisible?: boolean;
    contextualMenuTarget?: HTMLElement;
    isPickerDisabled?: boolean;
}
export interface IFullDocumentCardProps {
    documentCardProps?: IDocumentCardProps;
    documentActionsProps?: IDocumentCardActionsProps;
    documentPreviewProps?: IDocumentCardPreviewProps;
    documentActivityProps?: IDocumentCardActivityProps;
    documentTitleProps?: IDocumentCardTitleProps;
}
export interface IDocumentPickerProps extends IBasePickerProps<IFullDocumentCardProps> {
}
export declare const SuggestedBigItem: (documentProps: IFullDocumentCardProps, itemProps: ISuggestionItemProps<any>) => JSX.Element;
export declare const SelectedDocumentItem: (documentProps: IPickerItemProps<IFullDocumentCardProps>) => JSX.Element;
export declare class DocumentPicker extends BasePickerListBelow<IFullDocumentCardProps, IDocumentPickerProps> {
}
export declare class PickerCustomResultExample extends React.Component<{}, IPeoplePickerExampleState> {
    constructor(props: {});
    render(): JSX.Element;
    private _getTextFromItem(props);
    private _onDisabledButtonClick;
    private _onFilterChanged(filterText, items);
    private _listContainsDocument(document, items);
}
