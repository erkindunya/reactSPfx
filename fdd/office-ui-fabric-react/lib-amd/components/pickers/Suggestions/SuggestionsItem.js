define(["require", "exports", "tslib", "react", "../../../Utilities", "../../../Button", "./Suggestions.scss"], function (require, exports, tslib_1, React, Utilities_1, Button_1, stylesImport) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var legacyStyles = stylesImport;
    var getClassNames = Utilities_1.classNamesFunction();
    /**
     * {@docCategory Pickers}
     */
    var SuggestionsItem = /** @class */ (function (_super) {
        tslib_1.__extends(SuggestionsItem, _super);
        function SuggestionsItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SuggestionsItem.prototype.render = function () {
            var _a = this.props, suggestionModel = _a.suggestionModel, RenderSuggestion = _a.RenderSuggestion, onClick = _a.onClick, className = _a.className, onRemoveItem = _a.onRemoveItem, isSelectedOverride = _a.isSelectedOverride, removeButtonAriaLabel = _a.removeButtonAriaLabel, styles = _a.styles, theme = _a.theme;
            // TODO
            // Clean this up by leaving only the first part after removing support for SASS.
            // Currently we can not remove the SASS styles from SuggestionsItem class because it
            // might be used by consumers separately from pickers extending from BasePicker
            // and have not used the new 'styles' prop. Because it's expecting a type parameter,
            // we can not use the 'styled' function without adding some helpers which can break
            // downstream consumers who did not use the new helpers.
            // We check for 'styles' prop which is going to be injected by the 'styled' HOC
            // in Suggestions when the typed SuggestionsItem class is ready to be rendered. If the
            // check passes we can use the CSS-in-JS styles. If the check fails (ex: custom picker),
            // then we just use the old SASS styles instead.
            var classNames = styles
                ? getClassNames(styles, {
                    theme: theme,
                    className: className,
                    suggested: suggestionModel.selected || isSelectedOverride
                })
                : {
                    root: Utilities_1.css('ms-Suggestions-item', legacyStyles.suggestionsItem, (_b = {},
                        _b['is-suggested ' + legacyStyles.suggestionsItemIsSuggested] = suggestionModel.selected || isSelectedOverride,
                        _b), className),
                    itemButton: Utilities_1.css('ms-Suggestions-itemButton', legacyStyles.itemButton),
                    closeButton: Utilities_1.css('ms-Suggestions-closeButton', legacyStyles.closeButton)
                };
            return (React.createElement("div", { className: classNames.root },
                React.createElement(Button_1.CommandButton, { onClick: onClick, className: classNames.itemButton }, RenderSuggestion(suggestionModel.item, this.props)),
                this.props.showRemoveButton ? (React.createElement(Button_1.IconButton, { iconProps: { iconName: 'Cancel', styles: { root: { fontSize: '12px' } } }, title: removeButtonAriaLabel, ariaLabel: removeButtonAriaLabel, onClick: onRemoveItem, className: classNames.closeButton })) : null));
            var _b;
        };
        return SuggestionsItem;
    }(Utilities_1.BaseComponent));
    exports.SuggestionsItem = SuggestionsItem;
});
//# sourceMappingURL=SuggestionsItem.js.map