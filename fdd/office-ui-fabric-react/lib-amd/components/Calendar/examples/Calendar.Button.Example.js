define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Callout", "office-ui-fabric-react/lib/Calendar", "office-ui-fabric-react/lib/FocusTrapZone"], function (require, exports, tslib_1, React, Button_1, Callout_1, Calendar_1, FocusTrapZone_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    var CalendarButtonExample = /** @class */ (function (_super) {
        tslib_1.__extends(CalendarButtonExample, _super);
        function CalendarButtonExample(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                showCalendar: false,
                selectedDate: null
            };
            _this._onClick = _this._onClick.bind(_this);
            _this._onDismiss = _this._onDismiss.bind(_this);
            _this._onSelectDate = _this._onSelectDate.bind(_this);
            return _this;
        }
        CalendarButtonExample.prototype.render = function () {
            var _this = this;
            return (React.createElement("div", null,
                React.createElement("div", { ref: function (calendarBtn) { return (_this._calendarButtonElement = calendarBtn); } },
                    React.createElement(Button_1.DefaultButton, { onClick: this._onClick, text: !this.state.selectedDate ? this.props.buttonString : this.state.selectedDate.toLocaleDateString() })),
                this.state.showCalendar && (React.createElement(Callout_1.Callout, { isBeakVisible: false, className: "ms-DatePicker-callout", gapSpace: 0, doNotLayer: false, target: this._calendarButtonElement, directionalHint: Callout_1.DirectionalHint.bottomLeftEdge, onDismiss: this._onDismiss, setInitialFocus: true },
                    React.createElement(FocusTrapZone_1.FocusTrapZone, { isClickableOutsideFocusTrap: true },
                        React.createElement(Calendar_1.Calendar, { onSelectDate: this._onSelectDate, onDismiss: this._onDismiss, isMonthPickerVisible: this.props.isMonthPickerVisible, value: this.state.selectedDate, firstDayOfWeek: Calendar_1.DayOfWeek.Sunday, strings: DayPickerStrings, isDayPickerVisible: this.props.isDayPickerVisible, highlightCurrentMonth: this.props.highlightCurrentMonth, highlightSelectedMonth: this.props.highlightSelectedMonth, showMonthPickerAsOverlay: this.props.showMonthPickerAsOverlay, showGoToToday: this.props.showGoToToday }))))));
        };
        CalendarButtonExample.prototype._onClick = function (event) {
            this.setState(function (prevState) {
                prevState.showCalendar = !prevState.showCalendar;
                return prevState;
            });
        };
        CalendarButtonExample.prototype._onDismiss = function () {
            this.setState(function (prevState) {
                prevState.showCalendar = false;
                return prevState;
            });
        };
        CalendarButtonExample.prototype._onSelectDate = function (date) {
            this.setState(function (prevState) {
                prevState.showCalendar = false;
                prevState.selectedDate = date;
                return prevState;
            });
        };
        CalendarButtonExample.defaultProps = {
            showMonthPickerAsOverlay: false,
            isDayPickerVisible: true,
            isMonthPickerVisible: true,
            showGoToToday: true,
            buttonString: 'Click for Calendar'
        };
        return CalendarButtonExample;
    }(React.Component));
    exports.CalendarButtonExample = CalendarButtonExample;
});
//# sourceMappingURL=Calendar.Button.Example.js.map