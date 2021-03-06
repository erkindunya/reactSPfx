define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/SearchBox"], function (require, exports, tslib_1, React, SearchBox_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // tslint:disable:jsx-no-lambda
    var SearchBoxSmallExample = /** @class */ (function (_super) {
        tslib_1.__extends(SearchBoxSmallExample, _super);
        function SearchBoxSmallExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SearchBoxSmallExample.prototype.render = function () {
            return (React.createElement(SearchBox_1.SearchBox, { styles: { root: { width: 200 } }, placeholder: "Search", onEscape: function (ev) {
                    console.log('Custom onEscape Called');
                }, onClear: function (ev) {
                    console.log('Custom onClear Called');
                }, onChange: function (newValue) { return console.log('SearchBox onChange fired: ' + newValue); }, onSearch: function (newValue) { return console.log('SearchBox onSearch fired: ' + newValue); }, onFocus: function () { return console.log('onFocus called'); }, onBlur: function () { return console.log('onBlur called'); } }));
        };
        return SearchBoxSmallExample;
    }(React.Component));
    exports.SearchBoxSmallExample = SearchBoxSmallExample;
});
//# sourceMappingURL=SearchBox.Small.Example.js.map