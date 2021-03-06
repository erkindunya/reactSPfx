"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var SearchBox_1 = require("office-ui-fabric-react/lib/SearchBox");
require("./SearchBox.Examples.scss");
// tslint:disable:jsx-no-lambda
var SearchBoxCustomIconExample = /** @class */ (function (_super) {
    tslib_1.__extends(SearchBoxCustomIconExample, _super);
    function SearchBoxCustomIconExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchBoxCustomIconExample.prototype.render = function () {
        return (React.createElement("div", { className: "ms-SearchBoxExample" },
            React.createElement(SearchBox_1.SearchBox, { placeholder: "Filter", onFocus: function () { return console.log('onFocus called'); }, onBlur: function () { return console.log('onBlur called'); }, iconProps: { iconName: 'Filter' } })));
    };
    return SearchBoxCustomIconExample;
}(React.Component));
exports.SearchBoxCustomIconExample = SearchBoxCustomIconExample;
//# sourceMappingURL=SearchBox.CustomIcon.Example.js.map