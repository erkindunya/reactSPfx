define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/SpinButton"], function (require, exports, tslib_1, React, SpinButton_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var styles = {
        root: {
            width: '400px'
        }
    };
    var upArrowButtonStyles = {
        rootChecked: {
            backgroundColor: 'green'
        },
        rootPressed: {
            backgroundColor: 'green'
        }
    };
    var downArrowButtonStyles = {
        rootChecked: {
            backgroundColor: 'red'
        },
        rootPressed: {
            backgroundColor: 'red'
        }
    };
    var SpinButtonCustomStyledExample = /** @class */ (function (_super) {
        tslib_1.__extends(SpinButtonCustomStyledExample, _super);
        function SpinButtonCustomStyledExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpinButtonCustomStyledExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(SpinButton_1.SpinButton, { styles: styles, upArrowButtonStyles: upArrowButtonStyles, downArrowButtonStyles: downArrowButtonStyles, defaultValue: "0", label: 'Custom styled SpinButton:', min: 0, max: 100, step: 1, incrementButtonAriaLabel: 'Increase value by 1', decrementButtonAriaLabel: 'Decrease value by 1' })));
        };
        return SpinButtonCustomStyledExample;
    }(React.Component));
    exports.SpinButtonCustomStyledExample = SpinButtonCustomStyledExample;
});
//# sourceMappingURL=SpinButton.CustomStyled.Example.js.map