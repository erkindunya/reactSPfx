/// <reference types="react" />
import { BaseComponent } from '../../../Utilities';
import { ISuggestionModel } from '../../../Pickers';
import { ISuggestionsCoreProps } from './Suggestions.types';
/**
 * Class when used with SuggestionsStore, renders a basic suggestions control
 */
export declare class SuggestionsCore<T> extends BaseComponent<ISuggestionsCoreProps<T>, {}> {
    currentIndex: number;
    currentSuggestion: ISuggestionModel<T> | undefined;
    protected _selectedElement: HTMLDivElement;
    private SuggestionsItemOfProperType;
    constructor(suggestionsProps: ISuggestionsCoreProps<T>);
    /**
     * Increments the selected suggestion index
     */
    nextSuggestion(): boolean;
    /**
     * Decrements the selected suggestion index
     */
    previousSuggestion(): boolean;
    readonly selectedElement: HTMLDivElement | undefined;
    getCurrentItem(): ISuggestionModel<T>;
    getSuggestionAtIndex(index: number): ISuggestionModel<T>;
    hasSuggestionSelected(): boolean;
    removeSuggestion(index: number): void;
    deselectAllSuggestions(): void;
    setSelectedSuggestion(index: number): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
    scrollSelected(): void;
    private _onClickTypedSuggestionsItem(item, index);
    private _onRemoveTypedSuggestionsItem(item, index);
}
