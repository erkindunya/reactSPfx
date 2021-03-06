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
    var DatePickerFormatExample = /** @class */ (function (_super) {
        tslib_1.__extends(DatePickerFormatExample, _super);
        function DatePickerFormatExample(props) {
            var _this = _super.call(this, props) || this;
            _this._onSelectDate = function (date) {
                _this.setState({ value: date });
            };
            _this._onClick = function () {
                _this.setState({ value: null });
            };
            _this._onFormatDate = function (date) {
                return date.getDate() + '/' + (date.getMonth() + 1) + '/' + (date.getFullYear() % 100);
            };
            _this._onParseDateFromString = function (value) {
                var date = _this.state.value || new Date();
                var values = (value || '').trim().split('/');
                var day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
                var month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
                var year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
                if (year < 100) {
                    year += date.getFullYear() - (date.getFullYear() % 100);
                }
                return new Date(year, month, day);
            };
            _this.state = {
                firstDayOfWeek: DatePicker_1.DayOfWeek.Sunday,
                value: null
            };
            return _this;
        }
        DatePickerFormatExample.prototype.render = function () {
            var _a = this.state, firstDayOfWeek = _a.firstDayOfWeek, value = _a.value;
            var desc = 'This field is required. One of the support input formats is year dash month dash day.';
            return (React.createElement("div", { className: "docs-DatePickerExample" },
                React.createElement("p", null, "Applications can customize how dates are formatted and parsed. Formatted dates can be ambiguous, so the control will avoid parsing the formatted strings of dates selected using the UI when text input is allowed. In this example, we are formatting and parsing dates as dd/MM/yy."),
                React.createElement(DatePicker_1.DatePicker, { label: "Start date", isRequired: false, allowTextInput: true, ariaLabel: desc, firstDayOfWeek: firstDayOfWeek, strings: DayPickerStrings, value: value, onSelectDate: this._onSelectDate, formatDate: this._onFormatDate, parseDateFromString: this._onParseDateFromString }),
                React.createElement(Button_1.DefaultButton, { onClick: this._onClick, text: "Clear" }),
                React.createElement("div", null, (this.state.value || '').toString())));
        };
        return DatePickerFormatExample;
    }(React.Component));
    exports.DatePickerFormatExample = DatePickerFormatExample;
});
//# sourceMappingURL=DatePicker.Format.Example.js.map