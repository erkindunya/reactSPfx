define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/index"], function (require, exports, tslib_1, React, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // tslint:disable:jsx-no-lambda
    var ComboBoxVirtualizedExample = /** @class */ (function (_super) {
        tslib_1.__extends(ComboBoxVirtualizedExample, _super);
        function ComboBoxVirtualizedExample(props) {
            var _this = _super.call(this, props) || this;
            _this._options = [];
            for (var i = 0; i < 1000; i++) {
                _this._options.push({
                    key: "" + i,
                    text: "Option " + i
                });
            }
            _this._options.push({ key: '1000', text: 'Very Very Very Very long option' });
            return _this;
        }
        ComboBoxVirtualizedExample.prototype.render = function () {
            return (React.createElement(index_1.Fabric, { className: "ms-ComboBoxExample" },
                React.createElement(index_1.VirtualizedComboBox, { styles: { root: { maxWidth: '300px' } }, defaultSelectedKey: "547", label: "Scaled/virtualized example with 1000 items", allowFreeform: true, autoComplete: "on", options: this._options, dropdownMaxWidth: 200, useComboBoxAsMenuWidth: true })));
        };
        return ComboBoxVirtualizedExample;
    }(React.Component));
    exports.ComboBoxVirtualizedExample = ComboBoxVirtualizedExample;
});
//# sourceMappingURL=ComboBox.Virtualized.Example.js.map