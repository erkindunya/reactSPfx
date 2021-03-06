"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Dropdown_1 = require("office-ui-fabric-react/lib/Dropdown");
var DropdownControlledMultiExample = /** @class */ (function (_super) {
    tslib_1.__extends(DropdownControlledMultiExample, _super);
    function DropdownControlledMultiExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            selectedItems: []
        };
        _this._onChange = function (event, item) {
            var newSelectedItems = _this.state.selectedItems.slice();
            if (item.selected) {
                // add the option if it's checked
                newSelectedItems.push(item.key);
            }
            else {
                // remove the option if it's unchecked
                var currIndex = newSelectedItems.indexOf(item.key);
                if (currIndex > -1) {
                    newSelectedItems.splice(currIndex, 1);
                }
            }
            _this.setState({
                selectedItems: newSelectedItems
            });
        };
        return _this;
    }
    DropdownControlledMultiExample.prototype.render = function () {
        var selectedItems = this.state.selectedItems;
        return (React.createElement(Dropdown_1.Dropdown, { placeholder: "Select options", label: "Multi-select controlled example", selectedKeys: selectedItems, onChange: this._onChange, multiSelect: true, options: [
                { key: 'fruitsHeader', text: 'Fruits', itemType: Dropdown_1.DropdownMenuItemType.Header },
                { key: 'apple', text: 'Apple' },
                { key: 'banana', text: 'Banana' },
                { key: 'orange', text: 'Orange', disabled: true },
                { key: 'grape', text: 'Grape' },
                { key: 'divider_1', text: '-', itemType: Dropdown_1.DropdownMenuItemType.Divider },
                { key: 'vegetablesHeader', text: 'Vegetables', itemType: Dropdown_1.DropdownMenuItemType.Header },
                { key: 'broccoli', text: 'Broccoli' },
                { key: 'carrot', text: 'Carrot' },
                { key: 'lettuce', text: 'Lettuce' }
            ], styles: { dropdown: { width: 300 } } }));
    };
    return DropdownControlledMultiExample;
}(React.Component));
exports.DropdownControlledMultiExample = DropdownControlledMultiExample;
//# sourceMappingURL=Dropdown.ControlledMulti.Example.js.map