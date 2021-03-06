"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = require("../../../Styling");
var GlobalClassNames = {
    root: 'ms-Suggestions',
    suggestionsContainer: 'ms-Suggestions-container',
    title: 'ms-Suggestions-title',
    forceResolveButton: 'ms-forceResolve-button',
    searchForMoreButton: 'ms-SearchMore-button',
    spinner: 'ms-Suggestions-spinner',
    noSuggestions: 'ms-Suggestions-none',
    suggestionsAvailable: 'ms-Suggestions-suggestionsAvailable',
    isSelected: 'is-selected'
};
function getStyles(props) {
    var className = props.className, suggestionsClassName = props.suggestionsClassName, theme = props.theme, forceResolveButtonSelected = props.forceResolveButtonSelected, searchForMoreButtonSelected = props.searchForMoreButtonSelected;
    var palette = theme.palette;
    var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
    var actionButtonStyles = {
        background: 'none',
        backgroundColor: 'transparent',
        border: 0,
        cursor: 'pointer',
        margin: 0,
        paddingLeft: 8,
        position: 'relative',
        borderTop: "1px solid " + palette.neutralLight,
        height: 40,
        textAlign: 'left',
        width: '100%',
        fontSize: Styling_1.FontSizes.small,
        selectors: {
            ':hover': {
                backgroundColor: palette.neutralLight,
                cursor: 'pointer'
            },
            ':focus, :active': {
                backgroundColor: palette.themeLight
            },
            '.ms-Button-icon': {
                fontSize: Styling_1.FontSizes.icon,
                width: 25
            },
            '.ms-Button-label': {
                margin: '0 4px 0 9px'
            }
        }
    };
    var actionButtonSelectedStyles = {
        backgroundColor: palette.themeLight
    };
    return {
        root: [
            classNames.root,
            {
                minWidth: 260
            },
            className
        ],
        suggestionsContainer: [
            classNames.suggestionsContainer,
            {
                overflowY: 'auto',
                overflowX: 'hidden',
                maxHeight: 300,
                borderBottom: "1px solid " + palette.neutralLight
            },
            suggestionsClassName
        ],
        title: [
            classNames.title,
            {
                padding: '0 12px',
                fontSize: Styling_1.FontSizes.small,
                color: palette.themePrimary,
                lineHeight: 40,
                borderBottom: "1px solid " + palette.neutralLight
            }
        ],
        forceResolveButton: [
            classNames.forceResolveButton,
            actionButtonStyles,
            forceResolveButtonSelected && [classNames.isSelected, actionButtonSelectedStyles]
        ],
        searchForMoreButton: [
            classNames.searchForMoreButton,
            actionButtonStyles,
            searchForMoreButtonSelected && [classNames.isSelected, actionButtonSelectedStyles]
        ],
        noSuggestions: [
            classNames.noSuggestions,
            {
                textAlign: 'center',
                color: palette.neutralSecondary,
                fontSize: Styling_1.FontSizes.small,
                lineHeight: 30
            }
        ],
        suggestionsAvailable: [classNames.suggestionsAvailable, Styling_1.hiddenContentStyle],
        subComponentStyles: {
            spinner: {
                root: [
                    classNames.spinner,
                    {
                        margin: '5px 0',
                        paddingLeft: 14,
                        textAlign: 'left',
                        whiteSpace: 'nowrap',
                        lineHeight: 20,
                        fontSize: Styling_1.FontSizes.small
                    }
                ],
                circle: {
                    display: 'inline-block',
                    verticalAlign: 'middle'
                },
                label: {
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    margin: '0 10px 0 16px'
                }
            }
        }
    };
}
exports.getStyles = getStyles;
//# sourceMappingURL=Suggestions.styles.js.map