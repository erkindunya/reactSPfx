"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var SearchBox_1 = require("office-ui-fabric-react/lib/SearchBox");
// tslint:disable:jsx-no-lambda
var SearchBoxUnderlinedExample = /** @class */ (function (_super) {
    tslib_1.__extends(SearchBoxUnderlinedExample, _super);
    function SearchBoxUnderlinedExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchBoxUnderlinedExample.prototype.render = function () {
        return (React.createElement(SearchBox_1.SearchBox, { placeholder: "Search", onFocus: function () { return console.log('onFocus called'); }, onBlur: function () { return console.log('onBlur called'); }, underlined: true }));
    };
    return SearchBoxUnderlinedExample;
}(React.Component));
exports.SearchBoxUnderlinedExample = SearchBoxUnderlinedExample;
//# sourceMappingURL=SearchBox.Underlined.Example.js.map