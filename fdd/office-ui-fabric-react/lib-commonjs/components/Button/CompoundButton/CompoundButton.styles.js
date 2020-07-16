"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = require("../../../Styling");
var Utilities_1 = require("../../../Utilities");
var BaseButton_styles_1 = require("../BaseButton.styles");
var SplitButton_styles_1 = require("../SplitButton/SplitButton.styles");
var ButtonThemes_1 = require("../ButtonThemes");
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles, primary) {
    var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
    var splitButtonStyles = SplitButton_styles_1.getStyles(theme);
    var compoundButtonStyles = {
        root: {
            maxWidth: '280px',
            minHeight: '72px',
            height: 'auto',
            padding: '20px'
        },
        flexContainer: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            minWidth: '100%',
            margin: ''
        },
        textContainer: {
            textAlign: 'left'
        },
        icon: {
            fontSize: '2em',
            lineHeight: '1em',
            height: '1em',
            margin: '0px 8px 0px 0px',
            flexBasis: '1em',
            flexShrink: '0'
        },
        label: {
            margin: '0 0 5px',
            lineHeight: '100%',
            fontWeight: Styling_1.FontWeights.semibold
        },
        description: [
            theme.fonts.small,
            {
                lineHeight: '100%'
            }
        ]
    };
    var standardCompoundTheme = {
        description: {
            color: theme.palette.neutralSecondary
        },
        descriptionHovered: {
            color: theme.palette.neutralDark
        },
        descriptionPressed: {
            color: 'inherit'
        },
        descriptionChecked: {
            color: 'inherit'
        },
        descriptionDisabled: {
            color: 'inherit'
        }
    };
    var primaryCompoundTheme = {
        description: {
            color: theme.palette.white,
            selectors: (_a = {},
                _a[Styling_1.HighContrastSelector] = {
                    color: 'Window',
                    backgroundColor: 'WindowText',
                    MsHighContrastAdjust: 'none'
                },
                _a)
        },
        descriptionHovered: {
            color: theme.palette.white,
            selectors: (_b = {},
                _b[Styling_1.HighContrastSelector] = {
                    color: 'Window',
                    backgroundColor: 'Highlight',
                    MsHighContrastAdjust: 'none'
                },
                _b)
        },
        descriptionPressed: {
            color: 'inherit'
        },
        descriptionChecked: {
            color: 'inherit'
        },
        descriptionDisabled: {
            color: 'inherit',
            selectors: (_c = {},
                _c[Styling_1.HighContrastSelector] = {
                    color: 'inherit'
                },
                _c)
        }
    };
    return Styling_1.concatStyleSets(baseButtonStyles, compoundButtonStyles, primary ? ButtonThemes_1.primaryStyles(theme) : ButtonThemes_1.standardStyles(theme), primary ? primaryCompoundTheme : standardCompoundTheme, splitButtonStyles, customStyles);
    var _a, _b, _c;
});
//# sourceMappingURL=CompoundButton.styles.js.map