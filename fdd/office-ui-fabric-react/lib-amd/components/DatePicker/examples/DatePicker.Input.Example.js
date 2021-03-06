define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/DatePicker", "./DatePicker.Examples.scss"], function (require, exports, tslib_1, React, Button_1, DatePicker_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
        isRequiredErrorMessage: 'Start date is required.',
        invalidInputErrorMessage: 'Invalid date format.'
    };
    var DatePickerInputExample = /** @class */ (function (_super) {
        tslib_1.__extends(DatePickerInputExample, _super);
        function DatePickerInputExample(props) {
            var _this = _super.call(this, props) || this;
            _this._onSelectDate = function (date) {
                _this.setState({ value: date });
            };
            _this._onClick = function () {
                _this.setState({ value: null });
            };
            _this.state = {
                firstDayOfWeek: DatePicker_1.DayOfWeek.Sunday,
                value: null
            };
            return _this;
        }
        DatePickerInputExample.prototype.render = function () {
            var _a = this.state, firstDayOfWeek = _a.firstDayOfWeek, value = _a.value;
            var desc = 'This field is required. One of the support input formats is year dash month dash day.';
            return (React.createElement("div", { className: "docs-DatePickerExample" },
                React.createElement("p", null, "Text input allowed by default when use keyboard navigation. Mouse click the TextField will popup DatePicker, click the TextField again will dismiss the DatePicker and allow text input."),
                React.createElement(DatePicker_1.DatePicker, { label: "Start date", isRequired: false, allowTextInput: true, ariaLabel: desc, firstDayOfWeek: firstDayOfWeek, strings: DayPickerStrings, value: value, onSelectDate: this._onSelectDate }),
                React.createElement(Button_1.DefaultButton, { onClick: this._onClick, text: "Clear" })));
        };
        return DatePickerInputExample;
    }(React.Component));
    exports.DatePickerInputExample = DatePickerInputExample;
});
//# sourceMappingURL=DatePicker.Input.Example.js.map