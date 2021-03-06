/// <reference types="react" />
import * as React from 'react';
import { DayOfWeek } from 'office-ui-fabric-react/lib/Calendar';
import { DateRangeType } from 'office-ui-fabric-react/lib/Calendar';
export interface ICalendarInlineExampleState {
    selectedDate?: Date | null;
    selectedDateRange?: Date[] | null;
}
export interface ICalendarInlineExampleProps {
    isMonthPickerVisible?: boolean;
    dateRangeType: DateRangeType;
    autoNavigateOnSelection: boolean;
    showGoToToday: boolean;
    showNavigateButtons?: boolean;
    highlightCurrentMonth?: boolean;
    highlightSelectedMonth?: boolean;
    isDayPickerVisible?: boolean;
    showMonthPickerAsOverlay?: boolean;
    showWeekNumbers?: boolean;
    minDate?: Date;
    maxDate?: Date;
    restrictedDates?: Date[];
    showSixWeeksByDefault?: boolean;
    workWeekDays?: DayOfWeek[];
    firstDayOfWeek?: DayOfWeek;
}
export declare class CalendarInlineExample extends React.Component<ICalendarInlineExampleProps, ICalendarInlineExampleState> {
    constructor(props: ICalendarInlineExampleProps);
    render(): JSX.Element;
    private _onDismiss();
    private _goPrevious();
    private _goNext();
    private _onSelectDate(date, dateRangeArray);
}
