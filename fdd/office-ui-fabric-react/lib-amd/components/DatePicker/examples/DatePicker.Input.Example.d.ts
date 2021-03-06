/// <reference types="react" />
import * as React from 'react';
import { DayOfWeek } from 'office-ui-fabric-react/lib/DatePicker';
import './DatePicker.Examples.scss';
export interface IDatePickerInputExampleState {
    firstDayOfWeek?: DayOfWeek;
    value?: Date | null;
}
export declare class DatePickerInputExample extends React.Component<{}, IDatePickerInputExampleState> {
    constructor(props: {});
    render(): JSX.Element;
    private _onSelectDate;
    private _onClick;
}
