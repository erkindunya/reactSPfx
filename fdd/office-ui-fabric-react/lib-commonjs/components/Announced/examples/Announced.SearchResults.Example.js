"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Announced_1 = require("office-ui-fabric-react/lib/Announced");
var Pickers_1 = require("office-ui-fabric-react/lib/Pickers");
var Text_1 = require("office-ui-fabric-react/lib/Text");
var Stack_1 = require("office-ui-fabric-react/lib/Stack");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var _testTags = [
    'black',
    'blue',
    'brown',
    'cyan',
    'green',
    'magenta',
    'mauve',
    'orange',
    'pink',
    'purple',
    'red',
    'rose',
    'violet',
    'white',
    'yellow'
].map(function (item) { return ({ key: item, name: item }); });
var AnnouncedSearchResultsExample = /** @class */ (function (_super) {
    tslib_1.__extends(AnnouncedSearchResultsExample, _super);
    function AnnouncedSearchResultsExample(props) {
        var _this = _super.call(this, props) || this;
        _this._getTextFromItem = function (item) {
            return item.name;
        };
        _this._onFilterChanged = function (filterText, tagList) {
            if (filterText && _this.state.emptyInput) {
                _this.setState({ emptyInput: false });
            }
            else if (!filterText && !_this.state.emptyInput) {
                _this.setState({ emptyInput: true });
            }
            var filteredTags = filterText
                ? _testTags
                    .filter(function (tag) { return tag.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0; })
                    .filter(function (tag) { return !_this._listContainsDocument(tag, tagList); })
                : [];
            if (filteredTags.length !== _this.state.numberOfSuggestions) {
                _this.setState({ numberOfSuggestions: filteredTags.length });
            }
            return filteredTags;
        };
        _this._async = new Utilities_1.Async(_this);
        _this.state = {
            seconds: 0,
            numberOfSuggestions: 0,
            emptyInput: true
        };
        return _this;
    }
    AnnouncedSearchResultsExample.prototype.render = function () {
        var stackTokens = { childrenGap: 10 };
        return (React.createElement(Stack_1.Stack, { tokens: stackTokens },
            React.createElement(Text_1.Text, null, "Turn on Narrator and type a letter or two into the TagPicker. This picker will filter added items from the search suggestions."),
            this._renderAnnounced(),
            React.createElement(Pickers_1.TagPicker, { onResolveSuggestions: this._onFilterChanged, getTextFromItem: this._getTextFromItem, pickerSuggestionsProps: {
                    suggestionsHeaderText: 'Suggested Tags',
                    noResultsFoundText: 'No Color Tags Found' // this alert handles the case when there are no suggestions available
                }, inputProps: {
                    'aria-label': 'Tag Picker'
                } })));
    };
    AnnouncedSearchResultsExample.prototype.componentDidMount = function () {
        var _this = this;
        this._async.setInterval(function () {
            _this.setState({ seconds: _this.state.seconds + 1 });
        }, 1000);
    };
    AnnouncedSearchResultsExample.prototype.componentWillUnmount = function () {
        this._async.dispose();
    };
    AnnouncedSearchResultsExample.prototype._renderAnnounced = function () {
        var _a = this.state, numberOfSuggestions = _a.numberOfSuggestions, emptyInput = _a.emptyInput;
        if (!emptyInput) {
            return (React.createElement(Announced_1.Announced, { message: numberOfSuggestions === 1 ? numberOfSuggestions + " Color Tag Found" : numberOfSuggestions + " Color Tags Found" }));
        }
    };
    AnnouncedSearchResultsExample.prototype._listContainsDocument = function (tag, tagList) {
        if (!tagList || !tagList.length || tagList.length === 0) {
            return false;
        }
        return tagList.filter(function (compareTag) { return compareTag.key === tag.key; }).length > 0;
    };
    return AnnouncedSearchResultsExample;
}(React.Component));
exports.AnnouncedSearchResultsExample = AnnouncedSearchResultsExample;
//# sourceMappingURL=Announced.SearchResults.Example.js.map