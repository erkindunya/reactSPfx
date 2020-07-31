import * as React from 'react';
import styles from './FluentUiDemo.module.scss';
import { IFluentUiDemoProps } from './IFluentUiDemoProps';

import { Fabric, Label, NormalPeoplePicker, IPersonaProps } from "office-ui-fabric-react";


interface IPeoplePickerState {
  selDate: Date;
}

interface IPeoplePickerProps {
  context?: any;
}

const userData = [
  {
    userid: "Vijay",
    username: "Vijay N",
    email: "vijay@abc.com"
  },
  {
    userid: "Ram",
    username: "Ram Kumar",
    email: "ram@abc.com"
  },
  {
    userid: "John",
    username: "John B",
    email: "john@abc.com"
  },
  {
    userid: "Ramesh",
    username: "Ramesh K",
    email: "ramesh@abc.com"
  }
];

export default class PeoplePickerDemo extends React.Component<IPeoplePickerProps, IPeoplePickerState> {

  constructor(props: IPeoplePickerProps) {
    super(props);

    this.state = {
      selDate: new Date()
    };
  }

  private findUsers = (value: string): IPersonaProps[] => {
    if (value.length > 2) {
      let matches = userData.filter(u => u.userid.toLowerCase().indexOf(value.toLowerCase()));

      let retValues = matches.map(p => {
        return {
          retext: p.userid,
          primaryText: p.username,
          secondaryText: p.email
        } as IPersonaProps;
      });

      return retValues;
    }

    return [];
  }


  public render(): React.ReactElement<IFluentUiDemoProps> {
    return (
      <Fabric>
        <div>
          Select Users: <NormalPeoplePicker onResolveSuggestions={this.findUsers} />
        </div>
        <div>
          <Label>DATA</Label>
          <Label>Date: {this.state.selDate.toDateString()} </Label>
        </div>
      </Fabric>
    );
  }
}