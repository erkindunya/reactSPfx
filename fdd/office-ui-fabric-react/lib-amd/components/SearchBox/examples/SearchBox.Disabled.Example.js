define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/SearchBox", "./SearchBox.Examples.scss"], function (require, exports, tslib_1, React, SearchBox_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // tslint:disable:jsx-no-lambda
    var SearchBoxDisabledExample = /** @class */ (function (_super) {
        tslib_1.__extends(SearchBoxDisabledExample, _super);
        function SearchBoxDisabledExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SearchBoxDisabledExample.prototype.render = function () {
            return (React.createElement("div", { className: "ms-SearchBoxExample" },
                React.createElement(SearchBox_1.SearchBox, { placeholder: "Search", onFocus: function () { return console.log('onFocus called'); }, onBlur: function () { return console.log('onBlur called'); }, disabled: true }),
                React.createElement(SearchBox_1.SearchBox, { placeholder: "Search", onFocus: function () { return console.log('onFocus called'); }, onBlur: function () { return console.log('onBlur called'); }, underlined: true, disabled: true })));
        };
        return SearchBoxDisabledExample;
    }(React.Component));
    exports.SearchBoxDisabledExample = SearchBoxDisabledExample;
});
//# sourceMappingURL=SearchBox.Disabled.Example.js.map