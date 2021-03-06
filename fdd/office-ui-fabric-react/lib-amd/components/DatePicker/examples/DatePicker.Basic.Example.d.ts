/// <reference types="react" />
import * as React from 'react';
import { DayOfWeek } from 'office-ui-fabric-react/lib/DatePicker';
import './DatePicker.Examples.scss';
export interface IDatePickerBasicExampleState {
    firstDayOfWeek?: DayOfWeek;
}
export declare class DatePickerBasicExample extends React.Component<{}, IDatePickerBasicExampleState> {
    constructor(props: {});
    render(): JSX.Element;
    private _onDropdownChange;
}
