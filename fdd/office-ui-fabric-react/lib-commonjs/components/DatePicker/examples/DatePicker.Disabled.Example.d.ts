/// <reference types="react" />
import * as React from 'react';
import { DayOfWeek } from 'office-ui-fabric-react/lib/DatePicker';
import './DatePicker.Examples.scss';
export interface IDatePickerDisabledExampleState {
    firstDayOfWeek?: DayOfWeek;
}
export declare class DatePickerDisabledExample extends React.Component<{}, IDatePickerDisabledExampleState> {
    constructor(props: {});
    render(): JSX.Element;
}
