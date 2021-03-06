/// <reference types="react" />
import * as React from 'react';
import { DayOfWeek } from 'office-ui-fabric-react/lib/DatePicker';
import './DatePicker.Examples.scss';
export interface IDatePickerFormatExampleState {
    firstDayOfWeek?: DayOfWeek;
    value?: Date | null;
}
export declare class DatePickerFormatExample extends React.Component<{}, IDatePickerFormatExampleState> {
    constructor(props: {});
    render(): JSX.Element;
    private _onSelectDate;
    private _onClick;
    private _onFormatDate;
    private _onParseDateFromString;
}
