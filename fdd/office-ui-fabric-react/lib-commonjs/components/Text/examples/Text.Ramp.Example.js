"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Text_1 = require("office-ui-fabric-react/lib/Text");
var DetailsList_1 = require("office-ui-fabric-react/lib/DetailsList");
var React = require("react");
var TestText = 'The quick brown fox jumped over the lazy dog.';
var Variants = [
    { name: 'tiny' },
    { name: 'xSmall' },
    { name: 'small' },
    { name: 'smallPlus' },
    { name: 'medium' },
    { name: 'mediumPlus' },
    { name: 'large' },
    { name: 'xLarge' },
    { name: 'xxLarge' },
    { name: 'mega' }
];
var TextRampExample = /** @class */ (function (_super) {
    tslib_1.__extends(TextRampExample, _super);
    function TextRampExample(props) {
        var _this = _super.call(this, props) || this;
        _this._allItems = [];
        Variants.forEach(function (setting, index) {
            return _this._allItems.push({
                key: setting.name + index,
                variant: setting.name,
                example: (React.createElement(Text_1.Text, { key: setting.name + 'text' + index, variant: setting.name, nowrap: true, block: true }, TestText))
            });
        });
        _this._columns = [
            { key: 'column1', name: 'Variant', fieldName: 'variant', minWidth: 100, maxWidth: 150, isResizable: true },
            { key: 'column2', name: 'Example', fieldName: 'example', minWidth: 200, maxWidth: 1600, isResizable: true }
        ];
        _this.state = {
            items: _this._allItems
        };
        return _this;
    }
    TextRampExample.prototype.render = function () {
        var items = this.state.items;
        return (React.createElement(DetailsList_1.DetailsList, { items: items, columns: this._columns, setKey: "set", selectionMode: DetailsList_1.SelectionMode.none, layoutMode: DetailsList_1.DetailsListLayoutMode.fixedColumns, onRenderRow: this._renderDetailsRow }));
    };
    TextRampExample.prototype._renderDetailsRow = function (props) {
        return React.createElement(DetailsList_1.DetailsRow, tslib_1.__assign({}, props, { styles: { root: { color: 'inherit' } } }));
    };
    return TextRampExample;
}(React.Component));
exports.TextRampExample = TextRampExample;
//# sourceMappingURL=Text.Ramp.Example.js.map