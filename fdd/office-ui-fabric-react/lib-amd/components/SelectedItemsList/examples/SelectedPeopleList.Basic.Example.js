define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/SelectedItemsList", "office-ui-fabric-react/lib/Selection", "office-ui-fabric-react/lib/Stack", "../../ExtendedPicker/examples/PeopleExampleData"], function (require, exports, tslib_1, React, Button_1, SelectedItemsList_1, Selection_1, Stack_1, PeopleExampleData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SelectedPeopleListBasicExample = /** @class */ (function (_super) {
        tslib_1.__extends(SelectedPeopleListBasicExample, _super);
        function SelectedPeopleListBasicExample(props) {
            var _this = _super.call(this, props) || this;
            _this._selectionList = React.createRef();
            _this._onRenderItem = function (props) {
                return React.createElement(SelectedItemsList_1.ExtendedSelectedItem, tslib_1.__assign({}, props));
            };
            _this._onAddItemButtonClicked = function () {
                if (_this._selectionList.current) {
                    var nextPersonIndex = _this.state.nextPersonIndex;
                    _this._selectionList.current.addItems([PeopleExampleData_1.people[nextPersonIndex]]);
                    _this.setState({ nextPersonIndex: nextPersonIndex + 1 });
                }
            };
            _this._onExpandItem = function (item) {
                var expandedItem = item.text === 'Group One' ? PeopleExampleData_1.groupOne : item.text === 'Group Two' ? PeopleExampleData_1.groupTwo : [];
                _this._selectionList.current.replaceItem(item, expandedItem);
            };
            _this.state = {
                nextPersonIndex: 0
            };
            _this._selection = new Selection_1.Selection({ onSelectionChanged: function () { return _this.forceUpdate(); } });
            return _this;
        }
        SelectedPeopleListBasicExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Button_1.PrimaryButton, { text: "Add another item", onClick: this._onAddItemButtonClicked, disabled: this.state.nextPersonIndex >= PeopleExampleData_1.people.length, styles: { root: { display: 'block', marginBottom: 20 } } }),
                React.createElement(Stack_1.Stack, { horizontal: true, wrap: true },
                    React.createElement(SelectedItemsList_1.SelectedPeopleList, { key: "normal", removeButtonAriaLabel: "Remove", defaultSelectedItems: [PeopleExampleData_1.people[40]], componentRef: this._selectionList, onCopyItems: this._onCopyItems, onExpandGroup: this._onExpandItem, copyMenuItemText: "Copy", removeMenuItemText: "Remove", selection: this._selection, onRenderItem: this._onRenderItem }))));
        };
        SelectedPeopleListBasicExample.prototype._onCopyItems = function (items) {
            return items.map(function (item) { return item.text; }).join(', ');
        };
        return SelectedPeopleListBasicExample;
    }(React.Component));
    exports.SelectedPeopleListBasicExample = SelectedPeopleListBasicExample;
});
//# sourceMappingURL=SelectedPeopleList.Basic.Example.js.map