"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var index_1 = require("office-ui-fabric-react/lib/index");
var wrapperClassName = index_1.mergeStyles({
    selectors: {
        '& > *': { marginBottom: '20px' },
        '& .ms-ComboBox': { maxWidth: '300px' }
    }
});
var ComboBoxCustomStyledExample = /** @class */ (function (_super) {
    tslib_1.__extends(ComboBoxCustomStyledExample, _super);
    function ComboBoxCustomStyledExample(props) {
        var _this = _super.call(this, props) || this;
        _this._fontMapping = (_a = {},
            _a['Arial Black'] = '"Arial Black", "Arial Black_MSFontService", sans-serif',
            _a['Times New Roman'] = '"Times New Roman", "Times New Roman_MSFontService", serif',
            _a['Comic Sans MS'] = '"Comic Sans MS", "Comic Sans MS_MSFontService", fantasy',
            _a['Calibri'] = 'Calibri, Calibri_MSFontService, sans-serif',
            _a);
        /**
         * Render function for non-header/divider options in the second example.
         */
        _this._onRenderOption = function (item) {
            if (item.itemType === index_1.SelectableOptionMenuItemType.Header || item.itemType === index_1.SelectableOptionMenuItemType.Divider) {
                return React.createElement("span", null, item.text);
            }
            var fontFamily = _this._fontMapping[item.text];
            if (!fontFamily) {
                // This is a new user-entered font. Add a font family definition for it.
                var newFontName = item.text;
                fontFamily = _this._fontMapping[newFontName] = "\"" + newFontName + "\",\"Segoe UI\",Tahoma,Sans-Serif";
            }
            return React.createElement("span", { style: { fontFamily: fontFamily } }, item.text);
        };
        var fonts = Object.keys(_this._fontMapping);
        // Options for first example
        _this._optionsWithCustomStyling = fonts.map(function (fontName) { return ({
            key: fontName,
            text: fontName,
            styles: {
                optionText: {
                    // This will cause the options to render with the given font
                    fontFamily: _this._fontMapping[fontName]
                }
            }
        }); });
        // Options for second example
        _this._optionsForCustomRender = [
            // Default font options are listed under this heading
            { key: 'header1', text: 'Theme Fonts', itemType: index_1.SelectableOptionMenuItemType.Header }
        ].concat(fonts.map(function (fontName) { return ({ key: fontName, text: fontName }); }), [
            { key: 'divider', text: '-', itemType: index_1.SelectableOptionMenuItemType.Divider },
            // User-added font options will be listed under this heading
            { key: 'header2', text: 'Other Options', itemType: index_1.SelectableOptionMenuItemType.Header }
        ]);
        return _this;
        var _a;
    }
    ComboBoxCustomStyledExample.prototype.render = function () {
        return (React.createElement(index_1.Fabric, { className: wrapperClassName },
            React.createElement(index_1.ComboBox, { defaultSelectedKey: "Calibri", label: "Custom styled ComboBox", options: this._optionsWithCustomStyling, styles: {
                    container: {
                        maxWidth: '300px'
                    },
                    // Light purple input background
                    root: {
                        backgroundColor: '#b4a0ff'
                    },
                    input: {
                        backgroundColor: '#b4a0ff'
                    }
                }, caretDownButtonStyles: {
                    // Purple caret button with white text on hover or press
                    rootHovered: {
                        color: 'white',
                        backgroundColor: '#5c2d91'
                    },
                    rootChecked: {
                        color: 'white',
                        backgroundColor: '#5c2d91'
                    },
                    rootCheckedHovered: {
                        color: 'white',
                        backgroundColor: '#32145a'
                    }
                }, comboBoxOptionStyles: {
                    optionText: {
                        fontFamily: 'initial' // this should be overriden by custom styles for each option
                    }
                } }),
            React.createElement(index_1.ComboBox, { defaultSelectedKey: "Calibri", label: "ComboBox with custom option rendering (type the name of a font and the option will render in that font)", allowFreeform: true, autoComplete: "on", options: this._optionsForCustomRender, onRenderOption: this._onRenderOption })));
    };
    return ComboBoxCustomStyledExample;
}(React.Component));
exports.ComboBoxCustomStyledExample = ComboBoxCustomStyledExample;
//# sourceMappingURL=ComboBox.CustomStyled.Example.js.map