import { ISuggestionModel } from './Suggestions.types';
/**
 * {@docCategory Pickers}
 */
export declare class SuggestionsController<T> {
    currentIndex: number;
    currentSuggestion: ISuggestionModel<T> | undefined;
    suggestions: ISuggestionModel<T>[];
    constructor();
    updateSuggestions(newSuggestions: T[], selectedIndex?: number): void;
    /**
     * Increments the suggestion index and gets the next suggestion in the list.
     */
    nextSuggestion(): boolean;
    /**
     * Decrements the suggestion index and gets the previous suggestion in the list.
     */
    previousSuggestion(): boolean;
    getSuggestions(): ISuggestionModel<T>[];
    getCurrentItem(): ISuggestionModel<T>;
    getSuggestionAtIndex(index: number): ISuggestionModel<T>;
    hasSelectedSuggestion(): boolean;
    removeSuggestion(index: number): void;
    createGenericSuggestion(itemToConvert: ISuggestionModel<T> | T): void;
    convertSuggestionsToSuggestionItems(suggestions: Array<ISuggestionModel<T> | T>): ISuggestionModel<T>[];
    deselectAllSuggestions(): void;
    setSelectedSuggestion(index: number): void;
    private _isSuggestionModel;
    private _ensureSuggestionModel;
}
