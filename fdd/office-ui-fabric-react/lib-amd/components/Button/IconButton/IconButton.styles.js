define(["require", "exports", "../../../Styling", "../../../Utilities", "../BaseButton.styles", "../SplitButton/SplitButton.styles"], function (require, exports, Styling_1, Utilities_1, BaseButton_styles_1, SplitButton_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles) {
        var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
        var splitButtonStyles = SplitButton_styles_1.getStyles(theme);
        var palette = theme.palette, semanticColors = theme.semanticColors;
        var iconButtonStyles = {
            root: {
                padding: '0 4px',
                width: '32px',
                height: '32px',
                backgroundColor: 'transparent',
                border: 'none',
                color: semanticColors.actionLink
            },
            rootHovered: {
                color: semanticColors.actionLinkHovered,
                selectors: (_a = {},
                    _a[Styling_1.HighContrastSelector] = {
                        borderColor: 'Highlight',
                        color: 'Highlight'
                    },
                    _a)
            },
            rootPressed: {
                color: palette.themePrimary
            },
            rootExpanded: {
                color: palette.themePrimary
            },
            rootChecked: {
                backgroundColor: semanticColors.buttonBackgroundChecked
            },
            rootCheckedHovered: {
                backgroundColor: semanticColors.buttonBackgroundHovered
            },
            rootDisabled: {
                color: semanticColors.disabledText
            }
        };
        return Styling_1.concatStyleSets(baseButtonStyles, iconButtonStyles, splitButtonStyles, customStyles);
        var _a;
    });
});
//# sourceMappingURL=IconButton.styles.js.map