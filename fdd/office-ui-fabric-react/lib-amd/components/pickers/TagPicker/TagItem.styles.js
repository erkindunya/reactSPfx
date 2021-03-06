define(["require", "exports", "../../../Styling", "../../Button/BaseButton.classNames"], function (require, exports, Styling_1, BaseButton_classNames_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalClassNames = {
        root: 'ms-TagItem',
        text: 'ms-TagItem-text',
        close: 'ms-TagItem-close',
        isSelected: 'is-selected'
    };
    var TAG_HEIGHT = 26;
    function getStyles(props) {
        var className = props.className, theme = props.theme, selected = props.selected, disabled = props.disabled;
        var palette = theme.palette;
        var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
        return {
            root: [
                classNames.root,
                Styling_1.getFocusStyle(theme),
                {
                    boxSizing: 'content-box',
                    flexShrink: '1',
                    margin: 2,
                    height: TAG_HEIGHT,
                    lineHeight: TAG_HEIGHT,
                    cursor: 'default',
                    userSelect: 'none',
                    display: 'flex',
                    flexWrap: 'nowrap',
                    maxWidth: 300,
                    background: !selected || disabled ? palette.neutralLighter : palette.themePrimary,
                    selectors: (_a = {
                            ':hover': [
                                !disabled &&
                                    !selected && {
                                    background: palette.neutralLight,
                                    selectors: {
                                        '.ms-TagItem-close': {
                                            color: palette.neutralPrimary
                                        }
                                    }
                                },
                                disabled && { background: palette.neutralLighter },
                                selected && !disabled && { background: palette.themePrimary }
                            ]
                        },
                        _a[Styling_1.HighContrastSelector] = {
                            border: "1px solid " + (!selected ? 'WindowText' : 'WindowFrame')
                        },
                        _a)
                },
                disabled && {
                    selectors: (_b = {},
                        _b[Styling_1.HighContrastSelector] = {
                            borderColor: 'GrayText'
                        },
                        _b)
                },
                selected &&
                    !disabled && [
                    classNames.isSelected,
                    {
                        color: palette.white
                    }
                ],
                className
            ],
            text: [
                classNames.text,
                {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    minWidth: 30,
                    margin: '0 8px'
                },
                disabled && {
                    selectors: (_c = {},
                        _c[Styling_1.HighContrastSelector] = {
                            color: 'GrayText'
                        },
                        _c)
                }
            ],
            close: [
                classNames.close,
                {
                    color: palette.neutralSecondary,
                    width: 30,
                    height: '100%',
                    flex: '0 0 auto',
                    selectors: {
                        ':hover': {
                            background: palette.neutralQuaternaryAlt,
                            color: palette.neutralPrimary
                        }
                    }
                },
                selected && {
                    color: palette.white,
                    selectors: (_d = {
                            ':hover': {
                                color: palette.white,
                                background: palette.themeDark
                            }
                        },
                        _d[Styling_1.HighContrastSelector] = {
                            color: 'HighlightText'
                        },
                        _d)
                },
                disabled && {
                    selectors: (_e = {},
                        _e["." + BaseButton_classNames_1.ButtonGlobalClassNames.msButtonIcon] = {
                            color: palette.neutralSecondary
                        },
                        _e)
                }
            ]
        };
        var _a, _b, _c, _d, _e;
    }
    exports.getStyles = getStyles;
});
//# sourceMappingURL=TagItem.styles.js.map