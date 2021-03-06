define(["require", "exports", "tslib", "react", "office-ui-fabric-react"], function (require, exports, tslib_1, React, office_ui_fabric_react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var exampleStyles = {
        twoup: [
            'ms-BasicButtonsTwoUp',
            {
                display: 'flex',
                selectors: {
                    '& > *': {
                        flexGrow: 1
                    },
                    '.ms-Label': {
                        marginBottom: '10px'
                    }
                }
            }
        ]
    };
    var getClassNames = office_ui_fabric_react_1.classNamesFunction();
    var classNames = getClassNames(exampleStyles, {});
    var ButtonDefaultExample = /** @class */ (function (_super) {
        tslib_1.__extends(ButtonDefaultExample, _super);
        function ButtonDefaultExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ButtonDefaultExample.prototype.render = function () {
            var _a = this.props, disabled = _a.disabled, checked = _a.checked;
            return (React.createElement("div", { className: office_ui_fabric_react_1.css(classNames.twoup) },
                React.createElement("div", null,
                    React.createElement(office_ui_fabric_react_1.Label, null, "Standard"),
                    React.createElement(office_ui_fabric_react_1.DefaultButton, { "data-automation-id": "test", allowDisabledFocus: true, disabled: disabled, checked: checked, text: "Button", onClick: this._alertClicked })),
                React.createElement("div", null,
                    React.createElement(office_ui_fabric_react_1.Label, null, "Primary"),
                    React.createElement(office_ui_fabric_react_1.PrimaryButton, { "data-automation-id": "test", disabled: disabled, checked: checked, text: "Button", onClick: this._alertClicked, allowDisabledFocus: true }))));
        };
        ButtonDefaultExample.prototype._alertClicked = function () {
            alert('Clicked');
        };
        return ButtonDefaultExample;
    }(React.Component));
    exports.ButtonDefaultExample = ButtonDefaultExample;
});
//# sourceMappingURL=Button.Default.Example.js.map