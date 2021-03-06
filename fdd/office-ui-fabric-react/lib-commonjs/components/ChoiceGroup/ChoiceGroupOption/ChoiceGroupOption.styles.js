"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = require("../../../Styling");
var Utilities_1 = require("../../../Utilities");
var GlobalClassNames = {
    root: 'ms-ChoiceField',
    choiceFieldWrapper: 'ms-ChoiceField-wrapper',
    input: 'ms-ChoiceField-input',
    field: 'ms-ChoiceField-field',
    innerField: 'ms-ChoiceField-innerField',
    imageWrapper: 'ms-ChoiceField-imageWrapper',
    iconWrapper: 'ms-ChoiceField-iconWrapper',
    labelWrapper: 'ms-ChoiceField-labelWrapper',
    checked: 'is-checked'
};
var labelWrapperLineHeight = 15;
var iconSize = 32;
var choiceFieldSize = 20;
var choiceFieldTransitionDuration = '200ms';
var choiceFieldTransitionTiming = 'cubic-bezier(.4, 0, .23, 1)';
var radioButtonSpacing = 3;
var radioButtonInnerSize = 5;
function getChoiceGroupFocusStyle(palette, hasIconOrImage) {
    return [
        'is-inFocus',
        {
            selectors: (_a = {},
                _a["." + Utilities_1.IsFocusVisibleClassName + " &"] = {
                    position: 'relative',
                    outline: 'transparent',
                    selectors: {
                        '::-moz-focus-inner': {
                            border: 0
                        },
                        ':after': {
                            content: '""',
                            top: -2,
                            right: -2,
                            bottom: -2,
                            left: -2,
                            pointerEvents: 'none',
                            border: '1px solid ' + (hasIconOrImage ? palette.neutralSecondary : palette.neutralPrimary),
                            position: 'absolute',
                            selectors: (_b = {},
                                _b[Styling_1.HighContrastSelector] = {
                                    borderColor: 'WindowText',
                                    borderWidth: hasIconOrImage ? 1 : 2
                                },
                                _b)
                        }
                    }
                },
                _a)
        }
    ];
    var _a, _b;
}
function getImageWrapperStyle(isSelectedImageWrapper, className, checked) {
    return [
        className,
        {
            paddingBottom: 2,
            transitionProperty: 'opacity',
            transitionDuration: choiceFieldTransitionDuration,
            transitionTimingFunction: 'ease',
            selectors: {
                '.ms-Image': {
                    display: 'inline-block',
                    borderStyle: 'none'
                }
            }
        },
        (checked ? !isSelectedImageWrapper : isSelectedImageWrapper) && [
            'is-hidden',
            {
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                opacity: 0
            }
        ]
    ];
}
exports.getStyles = function (props) {
    var theme = props.theme, hasIcon = props.hasIcon, hasImage = props.hasImage, checked = props.checked, disabled = props.disabled, imageIsLarge = props.imageIsLarge, focused = props.focused;
    var palette = theme.palette, semanticColors = theme.semanticColors;
    var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
    var fieldHoverOrFocusProperties = {
        selectors: {
            '.ms-ChoiceFieldLabel': {
                color: semanticColors.bodyTextChecked
            },
            ':before': {
                borderColor: checked ? semanticColors.inputBackgroundCheckedHovered : semanticColors.inputBorderHovered
            }
        }
    };
    var enabledFieldWithImageHoverOrFocusProperties = {
        borderColor: checked ? palette.themeDark : palette.neutralTertiaryAlt,
        selectors: {
            ':before': {
                opacity: 1,
                borderColor: checked ? palette.themeDark : semanticColors.inputBorderHovered
            }
        }
    };
    var circleAreaProperties = [
        {
            content: '""',
            display: 'inline-block',
            backgroundColor: semanticColors.bodyBackground,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: semanticColors.smallInputBorder,
            width: choiceFieldSize,
            height: choiceFieldSize,
            fontWeight: 'normal',
            position: 'absolute',
            top: 0,
            left: 0,
            boxSizing: 'border-box',
            transitionProperty: 'border-color',
            transitionDuration: choiceFieldTransitionDuration,
            transitionTimingFunction: choiceFieldTransitionTiming,
            borderRadius: '50%'
        },
        disabled && {
            backgroundColor: checked ? semanticColors.bodyBackground : semanticColors.disabledText,
            borderColor: semanticColors.disabledText,
            selectors: (_a = {},
                _a[Styling_1.HighContrastSelector] = {
                    color: 'GrayText'
                },
                _a)
        },
        checked && {
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: disabled ? semanticColors.disabledText : semanticColors.inputBackgroundChecked,
            selectors: (_b = {},
                _b[Styling_1.HighContrastSelector] = {
                    borderColor: 'Highlight'
                },
                _b)
        },
        (hasIcon || hasImage) && {
            top: radioButtonSpacing,
            right: radioButtonSpacing,
            left: 'auto',
            opacity: !disabled && checked ? 1 : 0
        }
    ];
    var dotAreaProperties = [
        {
            content: '""',
            width: 0,
            height: 0,
            borderRadius: '50%',
            position: 'absolute',
            left: choiceFieldSize / 2,
            right: 0,
            transitionProperty: 'border-width',
            transitionDuration: choiceFieldTransitionDuration,
            transitionTimingFunction: choiceFieldTransitionTiming,
            boxSizing: 'border-box'
        },
        checked && {
            borderWidth: 5,
            borderStyle: 'solid',
            borderColor: disabled ? semanticColors.disabledText : semanticColors.inputBackgroundChecked,
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            selectors: (_c = {},
                _c[Styling_1.HighContrastSelector] = {
                    borderColor: 'Highlight'
                },
                _c)
        },
        checked &&
            (hasIcon || hasImage) && {
            top: radioButtonSpacing + radioButtonInnerSize,
            right: radioButtonSpacing + radioButtonInnerSize,
            left: 'auto' // To reset the value of 'left' to its default value, so that 'right' works
        }
    ];
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                display: 'flex',
                alignItems: 'center',
                boxSizing: 'border-box',
                color: semanticColors.bodyText,
                fontSize: Styling_1.FontSizes.medium,
                fontWeight: Styling_1.FontWeights.regular,
                minHeight: 26,
                border: 'none',
                position: 'relative',
                marginTop: 8,
                selectors: {
                    '.ms-ChoiceFieldLabel': {
                        fontSize: Styling_1.FontSizes.medium,
                        display: 'inline-block'
                    }
                }
            },
            !hasIcon &&
                !hasImage && {
                selectors: {
                    '.ms-ChoiceFieldLabel': {
                        paddingLeft: '26px'
                    }
                }
            },
            hasImage && 'ms-ChoiceField--image',
            hasIcon && 'ms-ChoiceField--icon',
            (hasIcon || hasImage) && {
                display: 'inline-flex',
                fontSize: 0,
                margin: '0 4px 4px 0',
                paddingLeft: 0,
                backgroundColor: palette.neutralLighter,
                height: '100%'
            }
        ],
        choiceFieldWrapper: [classNames.choiceFieldWrapper, focused && getChoiceGroupFocusStyle(palette, hasIcon || hasImage)],
        // The hidden input
        input: [
            classNames.input,
            {
                position: 'absolute',
                opacity: 0,
                top: 0,
                right: 0,
                width: '100%',
                height: '100%',
                margin: 0
            }
        ],
        field: [
            classNames.field,
            checked && classNames.checked,
            {
                display: 'inline-block',
                cursor: 'pointer',
                marginTop: 0,
                position: 'relative',
                verticalAlign: 'top',
                userSelect: 'none',
                minHeight: 20,
                selectors: {
                    ':hover': !disabled && fieldHoverOrFocusProperties,
                    ':focus': !disabled && fieldHoverOrFocusProperties,
                    // The circle
                    ':before': circleAreaProperties,
                    // The dot
                    ':after': dotAreaProperties
                }
            },
            hasIcon && 'ms-ChoiceField--icon',
            hasImage && 'ms-ChoiceField-field--image',
            (hasIcon || hasImage) && {
                boxSizing: 'content-box',
                cursor: 'pointer',
                paddingTop: 22,
                margin: 0,
                textAlign: 'center',
                transitionProperty: 'all',
                transitionDuration: choiceFieldTransitionDuration,
                transitionTimingFunction: 'ease',
                border: '2px solid transparent',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
            },
            checked && {
                borderColor: palette.themePrimary
            },
            (hasIcon || hasImage) &&
                !disabled && {
                selectors: {
                    ':hover': enabledFieldWithImageHoverOrFocusProperties,
                    ':focus': enabledFieldWithImageHoverOrFocusProperties
                }
            },
            disabled && {
                cursor: 'default',
                selectors: (_d = {
                        '.ms-ChoiceFieldLabel': {
                            color: semanticColors.disabledBodyText
                        }
                    },
                    _d[Styling_1.HighContrastSelector] = {
                        color: 'GrayText'
                    },
                    _d)
            }
        ],
        innerField: [
            classNames.innerField,
            (hasIcon || hasImage) && {
                position: 'relative',
                display: 'inline-block',
                paddingLeft: 30,
                paddingRight: 30
            },
            (hasIcon || hasImage) &&
                imageIsLarge && {
                paddingLeft: 24,
                paddingRight: 24
            },
            (hasIcon || hasImage) &&
                disabled && {
                opacity: 0.25,
                selectors: (_e = {},
                    _e[Styling_1.HighContrastSelector] = {
                        color: 'GrayText',
                        opacity: 1
                    },
                    _e)
            }
        ],
        imageWrapper: getImageWrapperStyle(false, classNames.imageWrapper, checked),
        selectedImageWrapper: getImageWrapperStyle(true, classNames.imageWrapper, checked),
        iconWrapper: [
            classNames.iconWrapper,
            {
                fontSize: iconSize,
                lineHeight: iconSize,
                height: iconSize
            }
        ],
        labelWrapper: [
            classNames.labelWrapper,
            (hasIcon || hasImage) && {
                display: 'block',
                position: 'relative',
                margin: '4px 8px',
                height: labelWrapperLineHeight * 2,
                lineHeight: labelWrapperLineHeight,
                overflow: 'hidden',
                whiteSpace: 'pre-wrap',
                textOverflow: 'ellipsis',
                fontSize: Styling_1.FontSizes.medium,
                fontWeight: Styling_1.FontWeights.regular
            }
        ]
    };
    var _a, _b, _c, _d, _e;
};
//# sourceMappingURL=ChoiceGroupOption.styles.js.map