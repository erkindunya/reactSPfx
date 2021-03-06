define(["require", "exports", "../../../Styling", "../../../Utilities", "../BaseButton.styles"], function (require, exports, Styling_1, Utilities_1, BaseButton_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles, focusInset, focusColor) {
        var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
        var messageBarButtonStyles = {
            root: {
                backgroundColor: theme.palette.neutralQuaternaryAlt,
                color: theme.palette.neutralPrimary
            },
            rootHovered: {
                backgroundColor: theme.palette.neutralTertiaryAlt,
                color: theme.palette.neutralDark
            },
            rootPressed: {
                backgroundColor: theme.palette.neutralTertiary,
                color: theme.palette.neutralDark
            }
        };
        return Styling_1.concatStyleSets(baseButtonStyles, messageBarButtonStyles, customStyles);
    });
});
//# sourceMappingURL=MessageBarButton.styles.js.map