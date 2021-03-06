define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/SearchBox"], function (require, exports, tslib_1, React, SearchBox_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
//# sourceMappingURL=SearchBox.Underlined.Example.js.map