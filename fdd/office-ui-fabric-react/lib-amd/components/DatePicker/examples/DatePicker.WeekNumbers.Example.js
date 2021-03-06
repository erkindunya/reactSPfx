define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Dropdown", "office-ui-fabric-react/lib/DatePicker", "./DatePicker.Examples.scss"], function (require, exports, tslib_1, React, Dropdown_1, DatePicker_1) {
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
        closeButtonAriaLabel: 'Close date picker'
    };
    var DatePickerWeekNumbersExample = /** @class */ (function (_super) {
        tslib_1.__extends(DatePickerWeekNumbersExample, _super);
        function DatePickerWeekNumbersExample(props) {
            var _this = _super.call(this, props) || this;
            _this._onDropdownChange = function (event, option) {
                _this.setState({
                    firstDayOfWeek: DatePicker_1.DayOfWeek[option.key]
                });
            };
            _this.state = {
                firstDayOfWeek: DatePicker_1.DayOfWeek.Monday
            };
            return _this;
        }
        DatePickerWeekNumbersExample.prototype.render = function () {
            var firstDayOfWeek = this.state.firstDayOfWeek;
            return (React.createElement("div", { className: "docs-DatePickerExample" },
                React.createElement(DatePicker_1.DatePicker, { firstDayOfWeek: firstDayOfWeek, strings: DayPickerStrings, showWeekNumbers: true, firstWeekOfYear: 1, showMonthPickerAsOverlay: true, placeholder: "Select a date...", ariaLabel: "Select a date" }),
                React.createElement(Dropdown_1.Dropdown, { label: "Select the first day of the week", options: [
                        {
                            text: 'Sunday',
                            key: DatePicker_1.DayOfWeek[DatePicker_1.DayOfWeek.Sunday]
                        },
                        {
                            text: 'Monday',
                            key: DatePicker_1.DayOfWeek[DatePicker_1.DayOfWeek.Monday]
                        },
                        {
                            text: 'Tuesday',
                            key: DatePicker_1.DayOfWeek[DatePicker_1.DayOfWeek.Tuesday]
                        },
                        {
                            text: 'Wednesday',
                            key: DatePicker_1.DayOfWeek[DatePicker_1.DayOfWeek.Wednesday]
                        },
                        {
                            text: 'Thursday',
                            key: DatePicker_1.DayOfWeek[DatePicker_1.DayOfWeek.Thursday]
                        },
                        {
                            text: 'Friday',
                            key: DatePicker_1.DayOfWeek[DatePicker_1.DayOfWeek.Friday]
                        },
                        {
                            text: 'Saturday',
                            key: DatePicker_1.DayOfWeek[DatePicker_1.DayOfWeek.Saturday]
                        }
                    ], selectedKey: DatePicker_1.DayOfWeek[firstDayOfWeek], onChange: this._onDropdownChange })));
        };
        return DatePickerWeekNumbersExample;
    }(React.Component));
    exports.DatePickerWeekNumbersExample = DatePickerWeekNumbersExample;
});
//# sourceMappingURL=DatePicker.WeekNumbers.Example.js.map