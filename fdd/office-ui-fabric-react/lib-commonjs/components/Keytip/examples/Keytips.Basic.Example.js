"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var KeytipSetup_1 = require("./KeytipSetup");
var Checkbox_1 = require("office-ui-fabric-react/lib/Checkbox");
var ComboBox_1 = require("office-ui-fabric-react/lib/ComboBox");
var Dropdown_1 = require("office-ui-fabric-react/lib/Dropdown");
var Link_1 = require("office-ui-fabric-react/lib/Link");
var SpinButton_1 = require("office-ui-fabric-react/lib/SpinButton");
var Toggle_1 = require("office-ui-fabric-react/lib/Toggle");
var Pivot_1 = require("office-ui-fabric-react/lib/Pivot");
var Stack_1 = require("office-ui-fabric-react/lib/Stack");
var pivotItemStyle = { width: 500, paddingTop: 20 };
var stackTokens = { childrenGap: 20 };
var KeytipsBasicExample = /** @class */ (function (_super) {
    tslib_1.__extends(KeytipsBasicExample, _super);
    function KeytipsBasicExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._sampleOptions = [{ key: 'A', text: 'Option 1' }, { key: 'B', text: 'Option 2' }, { key: 'C', text: 'Option 3' }];
        return _this;
    }
    /* tslint:disable:jsx-no-lambda */
    KeytipsBasicExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("p", null, "For Pivots, keytips will first show for each of the pivots. After selecting a pivot, the Keytips for its content are shown."),
            React.createElement(Pivot_1.Pivot, null,
                React.createElement(Pivot_1.PivotItem, { headerText: "Pivot 1", keytipProps: KeytipSetup_1.keytipMap.Pivot1Keytip, style: pivotItemStyle },
                    React.createElement(Stack_1.Stack, { tokens: stackTokens },
                        React.createElement(SpinButton_1.SpinButton, { label: "Spin Button", keytipProps: KeytipSetup_1.keytipMap.SpinButtonKeytip, styles: { root: { maxWidth: 200 } } }),
                        React.createElement(Toggle_1.Toggle, { onText: "Yes", offText: "No", keytipProps: KeytipSetup_1.keytipMap.ToggleKeytip }),
                        React.createElement("span", null,
                            "Go to",
                            ' ',
                            React.createElement(Link_1.Link, { keytipProps: KeytipSetup_1.keytipMap.LinkKeytip, href: "http://www.bing.com", target: "_blank" }, "Bing")))),
                React.createElement(Pivot_1.PivotItem, { headerText: "Pivot 2", keytipProps: KeytipSetup_1.keytipMap.Pivot2Keytip, style: pivotItemStyle },
                    React.createElement(Stack_1.Stack, { tokens: stackTokens },
                        React.createElement(Checkbox_1.Checkbox, { label: "Checkbox", keytipProps: KeytipSetup_1.keytipMap.CheckboxKeytip }),
                        React.createElement(Dropdown_1.Dropdown, { label: "Dropdown", keytipProps: KeytipSetup_1.keytipMap.DropdownKeytip, options: this._sampleOptions }))),
                React.createElement(Pivot_1.PivotItem, { headerText: "Pivot 3", keytipProps: KeytipSetup_1.keytipMap.Pivot3Keytip, style: pivotItemStyle },
                    React.createElement(ComboBox_1.ComboBox, { label: "Combo Box", keytipProps: KeytipSetup_1.keytipMap.ComboBoxKeytip, options: this._sampleOptions })))));
    };
    return KeytipsBasicExample;
}(React.Component));
exports.KeytipsBasicExample = KeytipsBasicExample;
//# sourceMappingURL=Keytips.Basic.Example.js.map