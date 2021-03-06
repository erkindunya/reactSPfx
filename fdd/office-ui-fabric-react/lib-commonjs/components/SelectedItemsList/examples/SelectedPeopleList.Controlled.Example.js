"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var SelectedItemsList_1 = require("office-ui-fabric-react/lib/SelectedItemsList");
var Selection_1 = require("office-ui-fabric-react/lib/Selection");
var Stack_1 = require("office-ui-fabric-react/lib/Stack");
var PeopleExampleData_1 = require("../../ExtendedPicker/examples/PeopleExampleData");
var SelectedPeopleListControlledExample = /** @class */ (function (_super) {
    tslib_1.__extends(SelectedPeopleListControlledExample, _super);
    function SelectedPeopleListControlledExample(props) {
        var _this = _super.call(this, props) || this;
        _this._selectionList = React.createRef();
        _this._onRenderItem = function (props) {
            return React.createElement(SelectedItemsList_1.ExtendedSelectedItem, tslib_1.__assign({}, props));
        };
        _this._onAddItemButtonClicked = function () {
            var _a = _this.state, nextPersonIndex = _a.nextPersonIndex, currentSelectedItems = _a.currentSelectedItems;
            _this.setState({
                currentSelectedItems: currentSelectedItems.concat([PeopleExampleData_1.people[nextPersonIndex]]),
                nextPersonIndex: nextPersonIndex + 1
            });
        };
        _this._onItemDeleted = function (item) {
            var currentSelectedItems = _this.state.currentSelectedItems;
            var indexToRemove = currentSelectedItems.indexOf(item);
            var newSelectedItems = currentSelectedItems.slice();
            newSelectedItems.splice(indexToRemove, 1);
            _this.setState({ currentSelectedItems: newSelectedItems });
        };
        _this._onExpandItem = function (item) {
            var currentSelectedItems = _this.state.currentSelectedItems;
            var expandedItem = item.text === 'Group One' ? PeopleExampleData_1.groupOne : item.text === 'Group Two' ? PeopleExampleData_1.groupTwo : [];
            var indexToExpand = currentSelectedItems.indexOf(item);
            _this.setState({
                currentSelectedItems: currentSelectedItems
                    .slice(0, indexToExpand)
                    .concat(expandedItem)
                    .concat(currentSelectedItems.slice(indexToExpand + 1))
            });
        };
        _this.state = {
            currentSelectedItems: [PeopleExampleData_1.people[40]],
            nextPersonIndex: 0
        };
        _this._selection = new Selection_1.Selection({ onSelectionChanged: function () { return _this.forceUpdate(); } });
        return _this;
    }
    SelectedPeopleListControlledExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Button_1.PrimaryButton, { text: "Add another item", onClick: this._onAddItemButtonClicked, disabled: this.state.nextPersonIndex >= PeopleExampleData_1.people.length, styles: { root: { display: 'block', marginBottom: 20 } } }),
            React.createElement(Stack_1.Stack, { horizontal: true, wrap: true, styles: { root: { maxWidth: '100%' } } },
                React.createElement(SelectedItemsList_1.SelectedPeopleList, { key: "normal", removeButtonAriaLabel: "Remove", selectedItems: this.state.currentSelectedItems, componentRef: this._selectionList, onCopyItems: this._onCopyItems, onExpandGroup: this._onExpandItem, copyMenuItemText: "Copy", removeMenuItemText: "Remove", selection: this._selection, onRenderItem: this._onRenderItem, onItemDeleted: this._onItemDeleted }))));
    };
    SelectedPeopleListControlledExample.prototype._onCopyItems = function (items) {
        return items.map(function (item) { return item.text; }).join(', ');
    };
    return SelectedPeopleListControlledExample;
}(React.Component));
exports.SelectedPeopleListControlledExample = SelectedPeopleListControlledExample;
//# sourceMappingURL=SelectedPeopleList.Controlled.Example.js.map