"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ChoiceGroup_1 = require("office-ui-fabric-react/lib/ChoiceGroup");
var ChoiceGroupIconExample = /** @class */ (function (_super) {
    tslib_1.__extends(ChoiceGroupIconExample, _super);
    function ChoiceGroupIconExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChoiceGroupIconExample.prototype.render = function () {
        return (React.createElement(ChoiceGroup_1.ChoiceGroup, { label: "Pick one icon", defaultSelectedKey: "day", options: [
                {
                    key: 'day',
                    iconProps: { iconName: 'CalendarDay' },
                    text: 'Day'
                },
                {
                    key: 'week',
                    iconProps: { iconName: 'CalendarWeek' },
                    text: 'Week'
                },
                {
                    key: 'month',
                    iconProps: { iconName: 'Calendar' },
                    text: 'Month',
                    disabled: true
                }
            ] }));
    };
    return ChoiceGroupIconExample;
}(React.Component));
exports.ChoiceGroupIconExample = ChoiceGroupIconExample;
//# sourceMappingURL=ChoiceGroup.Icon.Example.js.map