define(["require", "exports", "tslib", "react", "../../../../Utilities", "../../../../Persona", "./PeoplePickerItemSuggestion.styles"], function (require, exports, tslib_1, React, Utilities_1, Persona_1, PeoplePickerItemSuggestion_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    exports.PeoplePickerItemSuggestionBase = function (props) {
        var personaProps = props.personaProps, suggestionsProps = props.suggestionsProps, compact = props.compact, styles = props.styles, theme = props.theme, className = props.className;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: (suggestionsProps && suggestionsProps.suggestionsItemClassName) || className
        });
        var personaStyles = classNames.subComponentStyles && classNames.subComponentStyles.persona
            ? classNames.subComponentStyles.persona
            : undefined;
        return (React.createElement("div", { className: classNames.root },
            React.createElement(Persona_1.Persona, tslib_1.__assign({ size: Persona_1.PersonaSize.size24, styles: personaStyles, className: classNames.personaWrapper, showSecondaryText: !compact }, personaProps))));
    };
    exports.PeoplePickerItemSuggestion = Utilities_1.styled(exports.PeoplePickerItemSuggestionBase, PeoplePickerItemSuggestion_styles_1.getStyles, undefined, { scope: 'PeoplePickerItemSuggestion' });
});
//# sourceMappingURL=PeoplePickerItemSuggestion.js.map