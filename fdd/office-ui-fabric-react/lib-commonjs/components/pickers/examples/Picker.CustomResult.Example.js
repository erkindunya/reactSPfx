"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var DocumentCard_1 = require("office-ui-fabric-react/lib/DocumentCard");
var Image_1 = require("office-ui-fabric-react/lib/Image");
var Persona_1 = require("office-ui-fabric-react/lib/Persona");
var Checkbox_1 = require("office-ui-fabric-react/lib/Checkbox");
var Pickers_1 = require("office-ui-fabric-react/lib/Pickers");
// Helper imports to generate data for this particular examples. Not exported by any package.
var TestImages_1 = require("../../../common/TestImages");
var exampleStylesImport = require("../../../common/_exampleStyles.scss");
var exampleStyles = exampleStylesImport;
var data = [
    {
        documentPreviewProps: {
            previewImages: [
                {
                    previewImageSrc: TestImages_1.TestImages.documentPreview,
                    iconSrc: TestImages_1.TestImages.iconPpt,
                    imageFit: Image_1.ImageFit.cover,
                    width: 318,
                    height: 196,
                    accentColor: '#ce4b1f'
                }
            ]
        },
        documentCardProps: {},
        documentActionsProps: {
            actions: [
                {
                    iconProps: { iconName: 'Share' },
                    onClick: function (ev) {
                        console.log('You clicked the share action.');
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                },
                {
                    iconProps: { iconName: 'Pin' },
                    onClick: function (ev) {
                        console.log('You clicked the pin action.');
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                },
                {
                    iconProps: { iconName: 'Ringer' },
                    onClick: function (ev) {
                        console.log('You clicked the Ringer action.');
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                }
            ]
        },
        documentActivityProps: {
            activity: 'Created Feb 23, 2016',
            people: [
                { name: 'Kat Larrson', profileImageSrc: TestImages_1.TestImages.personaFemale },
                { name: 'Josh Hancock', profileImageSrc: '', initials: 'JH' },
                { name: 'Tina Dasani', profileImageSrc: TestImages_1.TestImages.personaFemale }
            ]
        },
        documentTitleProps: {
            title: 'Document1',
            shouldTruncate: true
        }
    },
    {
        documentPreviewProps: {
            previewImages: [
                {
                    previewImageSrc: TestImages_1.TestImages.documentPreview,
                    iconSrc: TestImages_1.TestImages.iconPpt,
                    imageFit: Image_1.ImageFit.cover,
                    width: 318,
                    height: 196,
                    accentColor: '#ce4b1f'
                }
            ]
        },
        documentCardProps: {},
        documentActionsProps: {
            actions: [
                {
                    iconProps: { iconName: 'Share' },
                    onClick: function (ev) {
                        console.log('You clicked the share action.');
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                },
                {
                    iconProps: { iconName: 'Pin' },
                    onClick: function (ev) {
                        console.log('You clicked the pin action.');
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                },
                {
                    iconProps: { iconName: 'Ringer' },
                    onClick: function (ev) {
                        console.log('You clicked the Ringer action.');
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                }
            ]
        },
        documentActivityProps: {
            activity: 'Created Feb 23, 2016',
            people: [
                { name: 'Kat Larrson', profileImageSrc: TestImages_1.TestImages.personaFemale },
                { name: 'Josh Hancock', profileImageSrc: '', initials: 'JH' },
                { name: 'Tina Dasani', profileImageSrc: TestImages_1.TestImages.personaFemale }
            ]
        },
        documentTitleProps: {
            title: 'Document2',
            shouldTruncate: true
        }
    },
    {
        documentPreviewProps: {
            previewImages: [
                {
                    previewImageSrc: TestImages_1.TestImages.documentPreviewTwo,
                    iconSrc: TestImages_1.TestImages.iconPpt,
                    imageFit: Image_1.ImageFit.cover,
                    width: 318,
                    height: 196,
                    accentColor: '#ce4b1f'
                }
            ]
        },
        documentCardProps: {},
        documentActionsProps: {
            actions: [
                {
                    iconProps: { iconName: 'Share' },
                    onClick: function (ev) {
                        console.log('You clicked the share action.');
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                },
                {
                    iconProps: { iconName: 'Pin' },
                    onClick: function (ev) {
                        console.log('You clicked the pin action.');
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                },
                {
                    iconProps: { iconName: 'Ringer' },
                    onClick: function (ev) {
                        console.log('You clicked the Ringer action.');
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                }
            ]
        },
        documentActivityProps: {
            activity: 'Created Feb 23, 2016',
            people: [
                { name: 'Kat Larrson', profileImageSrc: TestImages_1.TestImages.personaFemale },
                { name: 'Josh Hancock', profileImageSrc: '', initials: 'JH' },
                { name: 'Tina Dasani', profileImageSrc: TestImages_1.TestImages.personaFemale }
            ]
        },
        documentTitleProps: {
            title: 'Document3',
            shouldTruncate: true
        }
    },
    {
        documentPreviewProps: {
            previewImages: [
                {
                    previewImageSrc: TestImages_1.TestImages.documentPreviewThree,
                    iconSrc: TestImages_1.TestImages.iconPpt,
                    imageFit: Image_1.ImageFit.cover,
                    width: 318,
                    height: 196,
                    accentColor: '#ce4b1f'
                }
            ]
        },
        documentCardProps: {},
        documentActionsProps: {
            actions: [
                {
                    iconProps: { iconName: 'Share' },
                    onClick: function (ev) {
                        console.log('You clicked the share action.');
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                },
                {
                    iconProps: { iconName: 'Pin' },
                    onClick: function (ev) {
                        console.log('You clicked the pin action.');
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                },
                {
                    iconProps: { iconName: 'Ringer' },
                    onClick: function (ev) {
                        console.log('You clicked the Ringer action.');
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                }
            ]
        },
        documentActivityProps: {
            activity: 'Created Feb 23, 2016',
            people: [
                { name: 'Kat Larrson', profileImageSrc: TestImages_1.TestImages.personaFemale },
                { name: 'Josh Hancock', profileImageSrc: '', initials: 'JH' },
                { name: 'Tina Dasani', profileImageSrc: TestImages_1.TestImages.personaFemale }
            ]
        },
        documentTitleProps: {
            title: 'Document4',
            shouldTruncate: true
        }
    }
];
exports.SuggestedBigItem = function (documentProps, itemProps) {
    var documentPreviewProps = documentProps.documentPreviewProps, documentTitleProps = documentProps.documentTitleProps;
    return (React.createElement(Persona_1.Persona, { imageUrl: documentPreviewProps && documentPreviewProps.previewImages[0].previewImageSrc, text: documentTitleProps && documentTitleProps.title, size: Persona_1.PersonaSize.size40 }));
};
exports.SelectedDocumentItem = function (documentProps) {
    var _a = documentProps.item, documentActionsProps = _a.documentActionsProps, documentPreviewProps = _a.documentPreviewProps, documentActivityProps = _a.documentActivityProps, documentTitleProps = _a.documentTitleProps;
    var actions = [];
    if (documentActionsProps) {
        documentActionsProps.actions.forEach(function (action) { return actions.push(action); });
        actions.push({
            iconProps: { iconName: 'Cancel' },
            onClick: function (ev) {
                if (documentProps.onRemoveItem) {
                    documentProps.onRemoveItem();
                }
            }
        });
    }
    var log = function (text) { return function () { return console.log(text); }; };
    return (React.createElement(DocumentCard_1.DocumentCard, { onClick: log('You clicked the card.') },
        React.createElement(DocumentCard_1.DocumentCardPreview, tslib_1.__assign({}, documentPreviewProps)),
        React.createElement(DocumentCard_1.DocumentCardLocation, { location: "Marketing Documents", locationHref: "http://microsoft.com", ariaLabel: "Location, Marketing Documents" }),
        React.createElement(DocumentCard_1.DocumentCardTitle, tslib_1.__assign({}, documentTitleProps)),
        React.createElement(DocumentCard_1.DocumentCardActivity, tslib_1.__assign({}, documentActivityProps)),
        React.createElement(DocumentCard_1.DocumentCardActions, { actions: actions })));
};
var DocumentPicker = /** @class */ (function (_super) {
    tslib_1.__extends(DocumentPicker, _super);
    function DocumentPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DocumentPicker;
}(Pickers_1.BasePickerListBelow));
exports.DocumentPicker = DocumentPicker;
var PickerCustomResultExample = /** @class */ (function (_super) {
    tslib_1.__extends(PickerCustomResultExample, _super);
    function PickerCustomResultExample(props) {
        var _this = _super.call(this, props) || this;
        _this._onDisabledButtonClick = function () {
            _this.setState({
                isPickerDisabled: !_this.state.isPickerDisabled
            });
        };
        _this._onFilterChanged = _this._onFilterChanged.bind(_this);
        _this.state = {
            isPickerDisabled: false
        };
        return _this;
    }
    PickerCustomResultExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Checkbox_1.Checkbox, { className: exampleStyles.exampleCheckbox, label: "Disable Document Picker", checked: this.state.isPickerDisabled, onChange: this._onDisabledButtonClick }),
            React.createElement(DocumentPicker, { onRenderSuggestionsItem: exports.SuggestedBigItem, onResolveSuggestions: this._onFilterChanged, onRenderItem: exports.SelectedDocumentItem, getTextFromItem: this._getTextFromItem, pickerSuggestionsProps: {
                    suggestionsHeaderText: 'Suggested Documents',
                    noResultsFoundText: 'No Documents Found',
                    suggestionsItemClassName: 'ms-DocumentPicker-bigSuggestion'
                }, disabled: this.state.isPickerDisabled, inputProps: {
                    onFocus: function () { return console.log('onFocus called'); },
                    onBlur: function () { return console.log('onBlur called'); }
                } })));
    };
    PickerCustomResultExample.prototype._getTextFromItem = function (props) {
        return props.documentTitleProps.title;
    };
    PickerCustomResultExample.prototype._onFilterChanged = function (filterText, items) {
        var _this = this;
        return filterText
            ? data
                .filter(function (item) { return item.documentTitleProps && item.documentTitleProps.title.toLowerCase().indexOf(filterText.toLowerCase()) === 0; })
                .filter(function (item) { return !_this._listContainsDocument(item, items); })
            : [];
    };
    PickerCustomResultExample.prototype._listContainsDocument = function (document, items) {
        if (!items || !items.length || items.length === 0) {
            return false;
        }
        var documentTitle = document.documentTitleProps && document.documentTitleProps.title;
        return items.filter(function (item) { return (item.documentTitleProps && item.documentTitleProps.title) === documentTitle; }).length > 0;
    };
    return PickerCustomResultExample;
}(React.Component));
exports.PickerCustomResultExample = PickerCustomResultExample;
//# sourceMappingURL=Picker.CustomResult.Example.js.map