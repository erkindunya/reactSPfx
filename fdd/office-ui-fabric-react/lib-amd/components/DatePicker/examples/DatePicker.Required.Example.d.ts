/// <reference types="react" />
import * as React from 'react';
import { DayOfWeek } from 'office-ui-fabric-react/lib/DatePicker';
import './DatePicker.Examples.scss';
export interface IDatePickerRequiredExampleState {
    firstDayOfWeek?: DayOfWeek;
}
export declare class DatePickerRequiredExample extends React.Component<{}, IDatePickerRequiredExampleState> {
    constructor(props: {});
    render(): JSX.Element;
}
