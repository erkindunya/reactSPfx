import * as React from 'react';
import styles from './FluentUiDemo.module.scss';
import { IFluentUiDemoProps } from './IFluentUiDemoProps';

import { Label, TextField, PrimaryButton, DefaultButton, Checkbox } from "office-ui-fabric-react";
import { transitionKeysAreEqual } from 'office-ui-fabric-react/lib/utilities/keytips/IKeytipTransitionKey';
import TempConvert from "./TempConverter"
export default class FluentUiDemo extends React.Component<IFluentUiDemoProps, any> {
  constructor(props: IFluentUiDemoProps) {
    super(props);

    this.state = {
      name: "",
      email: "",
      discount: transitionKeysAreEqual
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
                <TempConvert />
              </div>
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
                  Discount: {this.state.discount ? "Yes" : "No"}
                </Label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}