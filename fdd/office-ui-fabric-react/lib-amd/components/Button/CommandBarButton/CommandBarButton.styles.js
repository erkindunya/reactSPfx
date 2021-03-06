define(["require", "exports", "../../../Styling", "../../../Utilities", "../BaseButton.styles", "../SplitButton/SplitButton.styles"], function (require, exports, Styling_1, Utilities_1, BaseButton_styles_1, SplitButton_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles, focusInset, focusColor) {
        var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
        var baseSplitButtonStyles = SplitButton_styles_1.getStyles(theme);
        var commandButtonHighContrastFocus = {
            left: 4,
            top: 4,
            bottom: 4,
            right: 4,
            border: 'none'
        };
        var commandButtonStyles = {
            root: [
                Styling_1.getFocusStyle(theme, { inset: -1, highContrastStyle: commandButtonHighContrastFocus }),
                theme.fonts.medium,
                {
                    minWidth: '40px',
                    backgroundColor: theme.palette.neutralLighter,
                    color: theme.palette.neutralPrimary,
                    padding: '0 4px',
                    selectors: (_a = {},
                        _a[Styling_1.HighContrastSelector] = {
                            border: 'none'
                        },
                        _a)
                }
            ],
            rootHovered: {
                backgroundColor: theme.palette.neutralLight,
                color: theme.palette.neutralDark,
                selectors: (_b = {},
                    _b[Styling_1.HighContrastSelector] = {
                        color: 'Highlight'
                    },
                    _b)
            },
            rootPressed: {
                backgroundColor: theme.palette.neutralQuaternaryAlt,
                color: theme.palette.black
            },
            rootChecked: {
                backgroundColor: theme.palette.neutralQuaternaryAlt,
                color: theme.palette.black
            },
            rootExpanded: {
                backgroundColor: theme.palette.neutralQuaternaryAlt,
                color: theme.palette.black
            },
            rootCheckedHovered: {
                backgroundColor: theme.palette.neutralQuaternary,
                color: theme.palette.black
            },
            // Split button styles
            splitButtonContainer: {
                selectors: (_c = {},
                    _c[Styling_1.HighContrastSelector] = {
                        border: 'none'
                    },
                    _c)
            },
            splitButtonDivider: {
                backgroundColor: theme.palette.neutralTertiaryAlt,
                marginTop: 4,
                marginBottom: 4
            },
            splitButtonMenuButton: {
                backgroundColor: theme.palette.neutralLighter,
                color: theme.palette.neutralPrimary,
                selectors: {
                    ':hover': {
                        backgroundColor: theme.palette.neutralLight,
                        color: theme.palette.neutralDark,
                        selectors: (_d = {},
                            _d[Styling_1.HighContrastSelector] = {
                                color: 'Highlight'
                            },
                            _d)
                    }
                }
            },
            splitButtonMenuButtonDisabled: {
                backgroundColor: theme.palette.neutralLighter,
                selectors: {
                    ':hover': {
                        backgroundColor: theme.palette.neutralLighter
                    }
                }
            },
            splitButtonMenuButtonChecked: {
                backgroundColor: theme.palette.neutralQuaternaryAlt,
                color: theme.palette.black,
                selectors: {
                    ':hover': {
                        backgroundColor: theme.palette.neutralQuaternaryAlt
                    }
                }
            },
            splitButtonMenuButtonExpanded: {
                backgroundColor: theme.palette.neutralQuaternaryAlt,
                color: theme.palette.black,
                selectors: {
                    ':hover': {
                        backgroundColor: theme.palette.neutralQuaternaryAlt
                    }
                }
            },
            splitButtonMenuIcon: {
                color: theme.palette.neutralPrimary
            },
            splitButtonMenuIconDisabled: {
                color: theme.palette.neutralTertiary
            },
            label: {
                fontWeight: 'normal' // theme.fontWeights.semibold,
            },
            icon: {
                color: theme.palette.themeDarkAlt
            },
            menuIcon: {
                color: theme.palette.neutralSecondary
            }
        };
        return Styling_1.concatStyleSets(baseButtonStyles, commandButtonStyles, baseSplitButtonStyles, customStyles);
        var _a, _b, _c, _d;
    });
});
//# sourceMappingURL=CommandBarButton.styles.js.map