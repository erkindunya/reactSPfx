import * as React from 'react';
import styles from './FluentUiDemo.module.scss';
import { IFluentUiDemoProps } from './IFluentUiDemoProps';

import { Fabric, Label, DatePicker, DayOfWeek } from "office-ui-fabric-react";


interface IPickerDemoState {
    selDate: Date;
}

interface IPickerDemoProps {
    context?: any;
}

export default class PickerDemo extends React.Component<IPickerDemoProps, IPickerDemoState> {
  constructor(props: IPickerDemoProps) {
    super(props);

    this.state = {
        selDate: new Date()
    };

  }

  public render(): React.ReactElement<IFluentUiDemoProps> {
    return (
        <Fabric>
              <div>
                <DatePicker label="Start Date: " placeholder="Pick a Date" />
              </div>
        </Fabric>
    );
  }
}
