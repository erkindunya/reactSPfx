"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var DateMath_1 = require("office-ui-fabric-react/lib/utilities/dateMath/DateMath");
var Calendar_1 = require("office-ui-fabric-react/lib/Calendar");
var Calendar_2 = require("office-ui-fabric-react/lib/Calendar");
var DayPickerStrings = {
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    goToToday: 'Go to today',
    weekNumberFormatString: 'Week number {0}',
    prevMonthAriaLabel: 'Previous month',
    nextMonthAriaLabel: 'Next month',
    prevYearAriaLabel: 'Previous year',
    nextYearAriaLabel: 'Next year',
    prevYearRangeAriaLabel: 'Previous year range',
    nextYearRangeAriaLabel: 'Next year range',
    closeButtonAriaLabel: 'Close'
};
var CalendarInlineExample = /** @class */ (function (_super) {
    tslib_1.__extends(CalendarInlineExample, _super);
    function CalendarInlineExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            selectedDate: null,
            selectedDateRange: null
        };
        _this._onDismiss = _this._onDismiss.bind(_this);
        _this._onSelectDate = _this._onSelectDate.bind(_this);
        _this._goNext = _this._goNext.bind(_this);
        _this._goPrevious = _this._goPrevious.bind(_this);
        return _this;
    }
    CalendarInlineExample.prototype.render = function () {
        var divStyle = {
            height: 'auto'
        };
        var buttonStyle = {
            margin: '17px 10px 0 0'
        };
        var dateRangeString = null;
        if (this.state.selectedDateRange) {
            var rangeStart = this.state.selectedDateRange[0];
            var rangeEnd = this.state.selectedDateRange[this.state.selectedDateRange.length - 1];
            dateRangeString = rangeStart.toLocaleDateString() + '-' + rangeEnd.toLocaleDateString();
        }
        return (React.createElement("div", { style: divStyle },
            React.createElement("div", null,
                "Selected date(s): ",
                React.createElement("span", null, !this.state.selectedDate ? 'Not set' : this.state.selectedDate.toLocaleString())),
            React.createElement("div", null,
                "Selected dates:",
                React.createElement("span", null,
                    " ",
                    !dateRangeString ? 'Not set' : dateRangeString)),
            (this.props.minDate || this.props.maxDate) && (React.createElement("div", null,
                "Date boundary:",
                React.createElement("span", null,
                    ' ',
                    this.props.minDate ? this.props.minDate.toLocaleDateString() : 'Not set',
                    "-",
                    this.props.maxDate ? this.props.maxDate.toLocaleDateString() : 'Not set'))),
            this.props.restrictedDates && (React.createElement("div", null,
                "Disabled date(s):",
                React.createElement("span", null,
                    ' ',
                    this.props.restrictedDates.length > 0 ? this.props.restrictedDates.map(function (d) { return d.toLocaleDateString(); }).join(', ') : 'Not set'))),
            React.createElement(Calendar_1.Calendar, { onSelectDate: this._onSelectDate, onDismiss: this._onDismiss, isMonthPickerVisible: this.props.isMonthPickerVisible, dateRangeType: this.props.dateRangeType, autoNavigateOnSelection: this.props.autoNavigateOnSelection, showGoToToday: this.props.showGoToToday, value: this.state.selectedDate, firstDayOfWeek: this.props.firstDayOfWeek ? this.props.firstDayOfWeek : Calendar_1.DayOfWeek.Sunday, strings: DayPickerStrings, highlightCurrentMonth: this.props.highlightCurrentMonth, highlightSelectedMonth: this.props.highlightSelectedMonth, isDayPickerVisible: this.props.isDayPickerVisible, showMonthPickerAsOverlay: this.props.showMonthPickerAsOverlay, showWeekNumbers: this.props.showWeekNumbers, minDate: this.props.minDate, maxDate: this.props.maxDate, restrictedDates: this.props.restrictedDates, showSixWeeksByDefault: this.props.showSixWeeksByDefault, workWeekDays: this.props.workWeekDays }),
            this.props.showNavigateButtons && (React.createElement("div", null,
                React.createElement(Button_1.DefaultButton, { style: buttonStyle, onClick: this._goPrevious, text: "Previous" }),
                React.createElement(Button_1.DefaultButton, { style: buttonStyle, onClick: this._goNext, text: "Next" })))));
    };
    CalendarInlineExample.prototype._onDismiss = function () {
        this.setState(function (prevState) {
            return prevState;
        });
    };
    CalendarInlineExample.prototype._goPrevious = function () {
        var _this = this;
        this.setState(function (prevState) {
            var selectedDate = prevState.selectedDate || new Date();
            var dateRangeArray = DateMath_1.getDateRangeArray(selectedDate, _this.props.dateRangeType, Calendar_1.DayOfWeek.Sunday);
            var subtractFrom = dateRangeArray[0];
            var daysToSubtract = dateRangeArray.length;
            if (_this.props.dateRangeType === Calendar_2.DateRangeType.Month) {
                subtractFrom = new Date(subtractFrom.getFullYear(), subtractFrom.getMonth(), 1);
                daysToSubtract = 1;
            }
            var newSelectedDate = DateMath_1.addDays(subtractFrom, -daysToSubtract);
            return {
                selectedDate: newSelectedDate
            };
        });
    };
    CalendarInlineExample.prototype._goNext = function () {
        var _this = this;
        this.setState(function (prevState) {
            var selectedDate = prevState.selectedDate || new Date();
            var dateRangeArray = DateMath_1.getDateRangeArray(selectedDate, _this.props.dateRangeType, Calendar_1.DayOfWeek.Sunday);
            var newSelectedDate = DateMath_1.addDays(dateRangeArray.pop(), 1);
            return {
                selectedDate: newSelectedDate
            };
        });
    };
    CalendarInlineExample.prototype._onSelectDate = function (date, dateRangeArray) {
        this.setState(function (prevState) {
            return {
                selectedDate: date,
                selectedDateRange: dateRangeArray
            };
        });
    };
    return CalendarInlineExample;
}(React.Component));
exports.CalendarInlineExample = CalendarInlineExample;
//# sourceMappingURL=Calendar.Inline.Example.js.map