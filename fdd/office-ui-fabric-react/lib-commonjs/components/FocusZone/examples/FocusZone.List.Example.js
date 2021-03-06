"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Link_1 = require("office-ui-fabric-react/lib/Link");
var FocusZone_1 = require("office-ui-fabric-react/lib/FocusZone");
var DetailsList_1 = require("office-ui-fabric-react/lib/DetailsList");
var ITEMS = Utilities_1.createArray(10, function (index) { return ({
    key: index.toString(),
    name: 'Item-' + index,
    url: 'http://placehold.it/100x' + (200 + index)
}); });
var COLUMNS = [
    {
        key: 'name',
        name: 'Name',
        fieldName: 'name',
        minWidth: 100
    },
    {
        key: 'link',
        name: 'Link',
        fieldName: 'url',
        minWidth: 100,
        onRender: function (item) { return React.createElement(Link_1.Link, { href: item.url }, item.url); }
    },
    {
        key: 'link',
        name: 'Link',
        fieldName: 'url',
        minWidth: 100,
        onRender: function (item) { return React.createElement(Button_1.DefaultButton, null, item.url); }
    }
];
var FocusZoneListExample = /** @class */ (function (_super) {
    tslib_1.__extends(FocusZoneListExample, _super);
    function FocusZoneListExample(props) {
        var _this = _super.call(this, props) || this;
        _this._isInnerZoneKeystroke = function (ev) {
            return ev.which === Utilities_1.getRTLSafeKeyCode(Utilities_1.KeyCodes.right);
        };
        _this._selection = new DetailsList_1.Selection();
        _this._selection.setItems(ITEMS);
        return _this;
    }
    FocusZoneListExample.prototype.render = function () {
        var _this = this;
        return (React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.vertical, isCircularNavigation: true, isInnerZoneKeystroke: this._isInnerZoneKeystroke }, ITEMS.map(function (item, index) { return (React.createElement(DetailsList_1.DetailsRow, { key: item.name, item: item, itemIndex: index, columns: COLUMNS, selectionMode: DetailsList_1.SelectionMode.none, selection: _this._selection, styles: { root: { display: 'block', width: '100%' } } })); })));
    };
    return FocusZoneListExample;
}(React.PureComponent));
exports.FocusZoneListExample = FocusZoneListExample;
//# sourceMappingURL=FocusZone.List.Example.js.map