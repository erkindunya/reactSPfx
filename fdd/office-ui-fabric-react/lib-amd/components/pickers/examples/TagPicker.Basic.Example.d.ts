/// <reference types="react" />
import { BaseComponent } from 'office-ui-fabric-react/lib/Utilities';
export interface ITagPickerDemoPageState {
    isPickerDisabled?: boolean;
}
export declare class TagPickerBasicExample extends BaseComponent<{}, ITagPickerDemoPageState> {
    private _picker;
    constructor(props: {});
    render(): JSX.Element;
    private _getTextFromItem(item);
    private _onDisabledButtonClick;
    private _onFilterChanged;
    private _onFilterChangedNoFilter;
    private _onItemSelected;
    private _listContainsDocument(tag, tagList?);
}
