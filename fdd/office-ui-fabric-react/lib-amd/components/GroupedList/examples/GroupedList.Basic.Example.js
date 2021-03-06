define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/components/GroupedList/index", "office-ui-fabric-react/lib/components/DetailsList/DetailsRow", "office-ui-fabric-react/lib/FocusZone", "office-ui-fabric-react/lib/utilities/selection/index", "office-ui-fabric-react/lib/Toggle", "office-ui-fabric-react/lib/utilities/exampleData"], function (require, exports, tslib_1, React, index_1, DetailsRow_1, FocusZone_1, index_2, Toggle_1, exampleData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var groupCount = 3;
    var groupDepth = 3;
    var GroupedListBasicExample = /** @class */ (function (_super) {
        tslib_1.__extends(GroupedListBasicExample, _super);
        function GroupedListBasicExample(props) {
            var _this = _super.call(this, props) || this;
            _this._onRenderCell = function (nestingDepth, item, itemIndex) {
                return (React.createElement(DetailsRow_1.DetailsRow, { columns: _this._columns, groupNestingDepth: nestingDepth, item: item, itemIndex: itemIndex, selection: _this._selection, selectionMode: index_2.SelectionMode.multiple, compact: _this.state.isCompactMode }));
            };
            _this._onChangeCompactMode = function (ev, checked) {
                _this.setState({ isCompactMode: checked });
            };
            _this._items = exampleData_1.createListItems(Math.pow(groupCount, groupDepth + 1));
            _this._columns = Object.keys(_this._items[0])
                .slice(0, 3)
                .map(function (key) { return ({
                key: key,
                name: key,
                fieldName: key,
                minWidth: 300
            }); });
            _this._groups = exampleData_1.createGroups(groupCount, groupDepth, 0, groupCount);
            _this._selection = new index_2.Selection();
            _this._selection.setItems(_this._items);
            _this.state = {
                isCompactMode: false
            };
            return _this;
        }
        GroupedListBasicExample.prototype.render = function () {
            var isCompactMode = this.state.isCompactMode;
            return (React.createElement("div", null,
                React.createElement(Toggle_1.Toggle, { label: "Enable compact mode", checked: isCompactMode, onChange: this._onChangeCompactMode, onText: "Compact", offText: "Normal", styles: { root: { marginBottom: '20px' } } }),
                React.createElement(FocusZone_1.FocusZone, null,
                    React.createElement(index_2.SelectionZone, { selection: this._selection, selectionMode: index_2.SelectionMode.multiple },
                        React.createElement(index_1.GroupedList, { items: this._items, onRenderCell: this._onRenderCell, selection: this._selection, selectionMode: index_2.SelectionMode.multiple, groups: this._groups, compact: isCompactMode })))));
        };
        return GroupedListBasicExample;
    }(React.Component));
    exports.GroupedListBasicExample = GroupedListBasicExample;
});
//# sourceMappingURL=GroupedList.Basic.Example.js.map