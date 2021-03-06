define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/SearchBox", "./SearchBox.Examples.scss"], function (require, exports, tslib_1, React, SearchBox_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
//# sourceMappingURL=SearchBox.CustomIcon.Example.js.map