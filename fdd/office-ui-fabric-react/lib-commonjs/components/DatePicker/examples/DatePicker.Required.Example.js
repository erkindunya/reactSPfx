"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var DatePicker_1 = require("office-ui-fabric-react/lib/DatePicker");
require("./DatePicker.Examples.scss");
var DayPickerStrings = {
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    goToToday: 'Go to today',
    prevMonthAriaLabel: 'Go to previous month',
    nextMonthAriaLabel: 'Go to next month',
    prevYearAriaLabel: 'Go to previous year',
    nextYearAriaLabel: 'Go to next year',
    closeButtonAriaLabel: 'Close date picker',
    isRequiredErrorMessage: 'Field is required.',
    invalidInputErrorMessage: 'Invalid date format.'
};
var DatePickerRequiredExample = /** @class */ (function (_super) {
    tslib_1.__extends(DatePickerRequiredExample, _super);
    function DatePickerRequiredExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            firstDayOfWeek: DatePicker_1.DayOfWeek.Sunday
        };
        return _this;
    }
    DatePickerRequiredExample.prototype.render = function () {
        var firstDayOfWeek = this.state.firstDayOfWeek;
        return (React.createElement("div", { className: "docs-DatePickerExample" },
            React.createElement("p", null, "Validation will happen when Date Picker loses focus."),
            React.createElement(DatePicker_1.DatePicker, { label: "Date required (with label)", isRequired: true, firstDayOfWeek: firstDayOfWeek, strings: DayPickerStrings, placeholder: "Select a date...", ariaLabel: "Select a date" }),
            React.createElement(DatePicker_1.DatePicker, { isRequired: true, firstDayOfWeek: firstDayOfWeek, strings: DayPickerStrings, placeholder: "Date required with no label...", ariaLabel: "Select a date" })));
    };
    return DatePickerRequiredExample;
}(React.Component));
exports.DatePickerRequiredExample = DatePickerRequiredExample;
//# sourceMappingURL=DatePicker.Required.Example.js.map