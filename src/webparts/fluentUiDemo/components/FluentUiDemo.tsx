import * as React from 'react';
import styles from './FluentUiDemo.module.scss';
import { IFluentUiDemoProps } from './IFluentUiDemoProps';

import { Label, TextField, PrimaryButton, DefaultButton, Checkbox, IDropdownStyles } from "office-ui-fabric-react";
import { Dropdown, IDropdownOption, DropdownMenuItemType } from "office-ui-fabric-react";

import { transitionKeysAreEqual } from 'office-ui-fabric-react/lib/utilities/keytips/IKeytipTransitionKey';

const options: IDropdownOption[] = [
  { key: "head1", text: "Indians", itemType: DropdownMenuItemType.Header },
  { key: "1", text: 'Indian' },
  { key: "2", text: 'NRI' },
  { key: "div1", text: '-', itemType: DropdownMenuItemType.Divider },
  { key: "6", text: 'OPC' },
  { key: "head2", text: "Regional", itemType: DropdownMenuItemType.Header },
  { key: "3", text: 'Nepalese' },
  { key: "4", text: 'Sri Lankan' },
  { key: "head3", text: "Others", itemType: DropdownMenuItemType.Header },
  { key: "5", text: 'Foreigner' }
];

const ddStyles: Partial<IDropdownStyles> = {
  dropdown: {
    width: 250
  }
};

export default class FluentUiDemo extends React.Component<IFluentUiDemoProps, any> {
  constructor(props: IFluentUiDemoProps) {
    super(props);

    this.state = {
      name: "",
      email: "",
      discount: transitionKeysAreEqual,
      status: ""
    };

  }

  public render(): React.ReactElement<IFluentUiDemoProps> {
    return (
      <div className={styles.fluentUiDemo}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Fluent UI Demo !</span>

              <div>
                <Label>Customer Info</Label>
                <TextField label="Name: " onChange={(event, value) => {
                  this.setState({
                    name: value
                  });
                }} />

                <TextField label="Email: " onChange={(event, value) => {
                  this.setState({
                    email: value
                  });
                }} /><br />

                <Dropdown label="Citizen Status: "
                  placeholder="Citizenship Status"
                  styles={ddStyles}
                  options={options}
                  onChange={(event, item: IDropdownOption) => {
                    this.setState({
                      status: item.text
                    });

                  }} /><br />

                <Checkbox label="Discount" checked={this.state.discount} onChange={(ev, chkd) => {
                  this.setState({
                    discount: chkd
                  });
                }} /><br /><br />

                <PrimaryButton text=" Save " />&nbsp;&nbsp;
                <DefaultButton text=" Cancel " />
              </div>
              <div className={styles.text}>
                <Label>Form Values</Label>
                <Label>
                  Name: {this.state.name} <br />
                  Email: {this.state.email} <br />
                  Discount: {this.state.discount ? "Yes" : "No"} <br />
                  Status: {this.state.status}
                </Label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}