"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var SearchBox_1 = require("office-ui-fabric-react/lib/SearchBox");
require("./SearchBox.Examples.scss");
// tslint:disable:jsx-no-lambda
var SearchBoxFullSizeExample = /** @class */ (function (_super) {
    tslib_1.__extends(SearchBoxFullSizeExample, _super);
    function SearchBoxFullSizeExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchBoxFullSizeExample.prototype.render = function () {
        return (React.createElement("div", { className: "ms-SearchBoxExample" },
            React.createElement(SearchBox_1.SearchBox, { placeholder: "Search", onSearch: function (newValue) { return console.log('value is ' + newValue); }, onFocus: function () { return console.log('onFocus called'); }, onBlur: function () { return console.log('onBlur called'); }, onChange: function () { return console.log('onChange called'); } }),
            React.createElement(SearchBox_1.SearchBox, { placeholder: "Search with no animation", onSearch: function (newValue) { return console.log('value is ' + newValue); }, onFocus: function () { return console.log('onFocus called'); }, onBlur: function () { return console.log('onBlur called'); }, onChange: function () { return console.log('onChange called'); }, disableAnimation: true })));
    };
    return SearchBoxFullSizeExample;
}(React.Component));
exports.SearchBoxFullSizeExample = SearchBoxFullSizeExample;
//# sourceMappingURL=SearchBox.FullSize.Example.js.map