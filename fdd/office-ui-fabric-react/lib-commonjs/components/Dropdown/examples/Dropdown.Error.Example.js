"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Dropdown_1 = require("office-ui-fabric-react/lib/Dropdown");
var Stack_1 = require("office-ui-fabric-react/lib/Stack");
var Toggle_1 = require("office-ui-fabric-react/lib/Toggle");
var DropdownErrorExample = /** @class */ (function (_super) {
    tslib_1.__extends(DropdownErrorExample, _super);
    function DropdownErrorExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Don't show the error message by default because it's annoying to screen reader users.
        _this.state = { showError: false };
        _this._updateShowError = function (event, checked) {
            _this.setState({ showError: !!checked });
        };
        return _this;
    }
    DropdownErrorExample.prototype.render = function () {
        var showError = this.state.showError;
        var stackTokens = { childrenGap: 30 };
        return (React.createElement(Stack_1.Stack, { horizontal: true, tokens: stackTokens, verticalAlign: "start" },
            React.createElement(Toggle_1.Toggle, { label: "Show error message", onText: "Yes", offText: "No", checked: showError, onChange: this._updateShowError }),
            React.createElement(Dropdown_1.Dropdown, { placeholder: "Select an option", label: "Dropdown with error message", options: [
                    { key: 'A', text: 'Option a' },
                    { key: 'B', text: 'Option b' },
                    { key: 'C', text: 'Option c' },
                    { key: 'D', text: 'Option d' },
                    { key: 'E', text: 'Option e' }
                ], errorMessage: showError ? 'This dropdown has an error' : undefined, styles: { dropdown: { width: 300 }, root: { height: 100 } } })));
    };
    return DropdownErrorExample;
}(React.Component));
exports.DropdownErrorExample = DropdownErrorExample;
//# sourceMappingURL=Dropdown.Error.Example.js.map