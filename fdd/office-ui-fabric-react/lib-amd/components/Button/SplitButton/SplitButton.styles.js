define(["require", "exports", "../../../Styling", "../../../Utilities"], function (require, exports, Styling_1, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles) {
        var buttonHighContrastFocus = {
            left: -2,
            top: -2,
            bottom: -2,
            right: -2,
            border: 'none'
        };
        var splitButtonDivider = {
            position: 'absolute',
            width: 1,
            right: 31,
            top: 8,
            bottom: 8
        };
        var splitButtonStyles = {
            splitButtonContainer: [
                Styling_1.getFocusStyle(theme, { highContrastStyle: buttonHighContrastFocus }),
                {
                    display: 'inline-flex'
                }
            ],
            splitButtonContainerFocused: {
                outline: 'none!important'
            },
            splitButtonMenuButton: {
                padding: 6,
                height: 'auto',
                boxSizing: 'border-box',
                border: 0,
                borderRadius: 0,
                outline: 'transparent',
                userSelect: 'none',
                display: 'inline-block',
                textDecoration: 'none',
                textAlign: 'center',
                cursor: 'pointer',
                verticalAlign: 'top',
                width: 32,
                marginLeft: -1,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            },
            splitButtonDivider: splitButtonDivider,
            splitButtonDividerDisabled: splitButtonDivider,
            splitButtonMenuButtonDisabled: {
                pointerEvents: 'none',
                selectors: {
                    ':hover': {
                        cursor: 'default'
                    }
                }
            },
            splitButtonFlexContainer: {
                display: 'flex',
                height: '100%',
                flexWrap: 'nowrap',
                justifyContent: 'center',
                alignItems: 'center'
            },
            splitButtonContainerDisabled: {
                outline: 'none',
                border: 'none'
            }
        };
        return Styling_1.concatStyleSets(splitButtonStyles, customStyles);
    });
});
//# sourceMappingURL=SplitButton.styles.js.map