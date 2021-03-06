"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = require("../../../../Styling");
var BaseButton_classNames_1 = require("../../../Button/BaseButton.classNames");
var GlobalClassNames = {
    root: 'ms-PickerPersona-container',
    itemContent: 'ms-PickerItem-content',
    removeButton: 'ms-PickerItem-removeButton',
    isSelected: 'is-selected',
    isInvalid: 'is-invalid'
};
var REMOVE_BUTTON_SIZE = 24;
function getStyles(props) {
    var className = props.className, theme = props.theme, selected = props.selected, invalid = props.invalid, disabled = props.disabled;
    var palette = theme.palette, semanticColors = theme.semanticColors;
    var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
    var personaPrimaryTextStyles = [
        selected &&
            !invalid &&
            !disabled && {
            color: palette.white,
            selectors: (_a = {},
                _a[Styling_1.HighContrastSelector] = {
                    color: 'HighlightText'
                },
                _a)
        },
        ((invalid && !selected) || (invalid && selected && disabled)) && {
            color: palette.redDark,
            borderBottom: "2px dotted " + palette.redDark,
            selectors: {
                '$root:hover &': {
                    // override Persona root:hover selector
                    color: palette.redDark
                }
            }
        },
        invalid &&
            selected &&
            !disabled && {
            color: palette.white,
            borderBottom: "2px dotted " + palette.white
        },
        disabled && {
            selectors: (_b = {},
                _b[Styling_1.HighContrastSelector] = {
                    color: 'GrayText'
                },
                _b)
        }
    ];
    var personaCoinInitialsStyles = [
        invalid && {
            fontSize: 20 // does not exist on the FontSizes type ramp.
        }
    ];
    return {
        root: [
            classNames.root,
            Styling_1.getFocusStyle(theme, { inset: -2 }),
            {
                borderRadius: 15,
                display: 'inline-flex',
                alignItems: 'center',
                background: palette.neutralLighter,
                margin: '1px 2px',
                cursor: 'default',
                userSelect: 'none',
                maxWidth: 300,
                verticalAlign: 'middle',
                minWidth: 0,
                selectors: (_c = {
                        ':hover': {
                            background: !selected && !disabled ? palette.neutralLight : ''
                        }
                    },
                    _c[Styling_1.HighContrastSelector] = [{ border: '1px solid WindowText' }, disabled && { borderColor: 'GrayText' }],
                    _c)
            },
            selected &&
                !disabled && [
                classNames.isSelected,
                {
                    background: palette.themePrimary,
                    selectors: (_d = {},
                        _d[Styling_1.HighContrastSelector] = {
                            borderColor: 'HighLight',
                            background: 'Highlight',
                            MsHighContrastAdjust: 'none'
                        },
                        _d)
                }
            ],
            invalid && [classNames.isInvalid],
            invalid &&
                selected &&
                !disabled && {
                background: palette.redDark
            },
            className
        ],
        itemContent: [
            classNames.itemContent,
            {
                flex: '0 1 auto',
                minWidth: 0,
                // CSS below is needed for IE 11 to properly truncate long persona names in the picker
                // and to clip the presence indicator (in all browsers)
                maxWidth: '100%',
                overflow: 'hidden'
            }
        ],
        removeButton: [
            classNames.removeButton,
            {
                borderRadius: 15,
                flex: '0 0 auto',
                width: REMOVE_BUTTON_SIZE,
                height: REMOVE_BUTTON_SIZE,
                flexBasis: REMOVE_BUTTON_SIZE,
                selectors: {
                    ':hover': {
                        background: palette.neutralTertiaryAlt,
                        color: palette.neutralDark
                    }
                }
            },
            selected && [
                {
                    color: palette.white,
                    selectors: (_e = {
                            ':hover': {
                                color: palette.white,
                                background: palette.themeDark
                            }
                        },
                        _e[Styling_1.HighContrastSelector] = {
                            color: 'HighlightText'
                        },
                        _e)
                },
                invalid && {
                    selectors: {
                        ':hover': {
                            background: palette.red
                        }
                    }
                }
            ],
            disabled && {
                selectors: (_f = {},
                    _f["." + BaseButton_classNames_1.ButtonGlobalClassNames.msButtonIcon] = {
                        color: semanticColors.buttonText
                    },
                    _f)
            }
        ],
        subComponentStyles: {
            persona: {
                primaryText: personaPrimaryTextStyles
            },
            personaCoin: {
                initials: personaCoinInitialsStyles
            }
        }
    };
    var _a, _b, _c, _d, _e, _f;
}
exports.getStyles = getStyles;
//# sourceMappingURL=PeoplePickerItem.styles.js.map