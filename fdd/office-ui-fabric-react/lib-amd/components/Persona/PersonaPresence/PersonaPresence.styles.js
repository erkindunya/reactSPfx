define(["require", "exports", "../../../Styling", "../PersonaConsts"], function (require, exports, Styling_1, PersonaConsts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalClassNames = {
        presence: 'ms-Persona-presence',
        presenceIcon: 'ms-Persona-presenceIcon'
    };
    exports.getStyles = function (props) {
        var theme = props.theme;
        var semanticColors = theme.semanticColors;
        var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
        var size = PersonaConsts_1.sizeBoolean(props.size);
        var presence = PersonaConsts_1.presenceBoolean(props.presence);
        // Presence colors
        var presenceColorAvailable = '#7FBA00';
        var presenceColorAway = '#FCD116';
        var presenceColorBusy = '#D93B3B';
        var presenceColorDnd = '#E81123';
        var presenceColorOffline = '#93ABBD';
        return {
            presence: [
                classNames.presence,
                {
                    position: 'absolute',
                    height: PersonaConsts_1.personaPresenceSize.size12,
                    width: PersonaConsts_1.personaPresenceSize.size12,
                    borderRadius: '50%',
                    top: 'auto',
                    right: "-" + PersonaConsts_1.personaPresenceSize.border,
                    bottom: "-" + PersonaConsts_1.personaPresenceSize.border,
                    border: PersonaConsts_1.personaPresenceSize.border + " solid " + semanticColors.bodyBackground,
                    textAlign: 'center',
                    boxSizing: 'content-box',
                    backgroundClip: 'content-box',
                    MsHighContrastAdjust: 'none',
                    selectors: (_a = {},
                        _a[Styling_1.HighContrastSelector] = {
                            borderColor: 'Window',
                            backgroundColor: 'WindowText'
                        },
                        _a)
                },
                size.isSize10 && {
                    right: 'auto',
                    top: '7px',
                    left: 0,
                    border: 0,
                    selectors: (_b = {},
                        _b[Styling_1.HighContrastSelector] = {
                            top: '9px',
                            border: '1px solid WindowText'
                        },
                        _b)
                },
                (size.isSize10 || size.isSize24 || size.isSize28 || size.isSize32) && {
                    height: PersonaConsts_1.personaPresenceSize.size8,
                    width: PersonaConsts_1.personaPresenceSize.size8
                },
                size.isSize16 && {
                    height: PersonaConsts_1.personaPresenceSize.size6,
                    width: PersonaConsts_1.personaPresenceSize.size6,
                    borderWidth: '1.5px'
                },
                size.isSize72 && {
                    height: PersonaConsts_1.personaPresenceSize.size20,
                    width: PersonaConsts_1.personaPresenceSize.size20
                },
                size.isSize100 && {
                    height: PersonaConsts_1.personaPresenceSize.size28,
                    width: PersonaConsts_1.personaPresenceSize.size28
                },
                presence.isAvailable && {
                    backgroundColor: presenceColorAvailable,
                    selectors: (_c = {},
                        _c[Styling_1.HighContrastSelector] = {
                            backgroundColor: 'Highlight'
                        },
                        _c)
                },
                presence.isAway && {
                    backgroundColor: presenceColorAway
                },
                presence.isBlocked && [
                    {
                        backgroundColor: semanticColors.bodyBackground,
                        selectors: (_d = {
                                ':before': {
                                    content: '""',
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    border: PersonaConsts_1.personaPresenceSize.border + " solid " + presenceColorBusy,
                                    borderRadius: '50%',
                                    boxSizing: 'border-box'
                                },
                                // Only show :after at larger sizes
                                ':after': size.isSize40 || size.isSize48 || size.isSize72 || size.isSize100
                                    ? {
                                        content: '""',
                                        width: '100%',
                                        height: PersonaConsts_1.personaPresenceSize.border,
                                        backgroundColor: presenceColorBusy,
                                        transform: 'translateY(-50%) rotate(-45deg)',
                                        position: 'absolute',
                                        top: '50%',
                                        left: 0
                                    }
                                    : undefined
                            },
                            _d[Styling_1.HighContrastSelector] = {
                                backgroundColor: 'WindowText',
                                selectors: {
                                    ':before': {
                                        width: "calc(100% - " + PersonaConsts_1.personaPresenceSize.border + ")",
                                        height: "calc(100% - " + PersonaConsts_1.personaPresenceSize.border + ")",
                                        top: parseFloat(PersonaConsts_1.personaPresenceSize.border) / 2 + 'px',
                                        left: parseFloat(PersonaConsts_1.personaPresenceSize.border) / 2 + 'px',
                                        borderColor: 'Window'
                                    },
                                    ':after': {
                                        width: "calc(100% - " + parseFloat(PersonaConsts_1.personaPresenceSize.border) * 2 + "px)",
                                        left: PersonaConsts_1.personaPresenceSize.border,
                                        backgroundColor: 'Window'
                                    }
                                }
                            },
                            _d)
                    }
                ],
                presence.isBusy && {
                    backgroundColor: presenceColorBusy
                },
                presence.isDoNotDisturb && {
                    backgroundColor: presenceColorDnd
                },
                presence.isOffline && {
                    backgroundColor: presenceColorOffline
                }
            ],
            presenceIcon: [
                classNames.presenceIcon,
                {
                    color: semanticColors.bodyBackground,
                    fontSize: '6px',
                    lineHeight: PersonaConsts_1.personaPresenceSize.size12,
                    verticalAlign: 'top',
                    selectors: (_e = {},
                        _e[Styling_1.HighContrastSelector] = {
                            color: 'Window'
                        },
                        _e)
                },
                size.isSize72 && {
                    fontSize: Styling_1.FontSizes.small,
                    lineHeight: PersonaConsts_1.personaPresenceSize.size20
                },
                size.isSize100 && {
                    fontSize: Styling_1.FontSizes.medium,
                    lineHeight: PersonaConsts_1.personaPresenceSize.size28
                },
                presence.isAway && {
                    position: 'relative',
                    left: '1px'
                }
            ]
        };
        var _a, _b, _c, _d, _e;
    };
});
//# sourceMappingURL=PersonaPresence.styles.js.map