"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Dropdown_1 = require("office-ui-fabric-react/lib/Dropdown");
var DropdownControlledExample = /** @class */ (function (_super) {
    tslib_1.__extends(DropdownControlledExample, _super);
    function DropdownControlledExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            selectedItem: undefined
        };
        _this._onChange = function (event, item) {
            console.log("Selection change: " + item.text + " " + (item.selected ? 'selected' : 'unselected'));
            _this.setState({ selectedItem: item });
        };
        return _this;
    }
    DropdownControlledExample.prototype.render = function () {
        var selectedItem = this.state.selectedItem;
        return (React.createElement(Dropdown_1.Dropdown, { label: "Controlled example", selectedKey: selectedItem ? selectedItem.key : undefined, onChange: this._onChange, placeholder: "Select an option", options: [
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
    return DropdownControlledExample;
}(React.Component));
exports.DropdownControlledExample = DropdownControlledExample;
//# sourceMappingURL=Dropdown.Controlled.Example.js.map