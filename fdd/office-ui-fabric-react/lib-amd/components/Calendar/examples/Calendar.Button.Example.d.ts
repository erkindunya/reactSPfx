/// <reference types="react" />
import * as React from 'react';
export interface ICalendarButtonExampleState {
    showCalendar: boolean;
    selectedDate: Date | null;
}
export interface ICalendarButtonExampleProps {
    isDayPickerVisible?: boolean;
    isMonthPickerVisible?: boolean;
    highlightCurrentMonth?: boolean;
    highlightSelectedMonth?: boolean;
    buttonString?: string;
    showMonthPickerAsOverlay?: boolean;
    showGoToToday?: boolean;
}
export declare class CalendarButtonExample extends React.Component<ICalendarButtonExampleProps, ICalendarButtonExampleState> {
    static defaultProps: ICalendarButtonExampleProps;
    private _calendarButtonElement;
    constructor(props: ICalendarButtonExampleProps);
    render(): JSX.Element;
    private _onClick(event);
    private _onDismiss();
    private _onSelectDate(date);
}
