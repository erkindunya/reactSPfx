import * as React from 'react';
import styles from './FluentUiDemo.module.scss';
import { IFluentUiDemoProps } from './IFluentUiDemoProps';

import { Label, TextField, PrimaryButton, DefaultButton } from "office-ui-fabric-react";

export default class FluentUiDemo extends React.Component<IFluentUiDemoProps,any> {
  constructor(props: IFluentUiDemoProps) {
    super(props);

    this.state = {
      name: "",
      email: ""
    };

  }

  public render(): React.ReactElement<IFluentUiDemoProps> {
    return (
      <div className={ styles.fluentUiDemo }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Fluent UI Demo !</span>
              <div>
                <Label>Customer Info</Label>
                <TextField label="Name: " onChange={ (event, value) => {
                  this.setState({
                    name: value
                  });
                }} />
                
                <TextField label="Email: "  onChange={ (event, value) => {
                  this.setState({
                    email: value
                  });
                }}/><br/>

                <PrimaryButton text=" Save " />
              </div>
              <div>
                <Label>Form Values</Label>
                <Label>
                  Name: { this.state.name } <br/>
                  Email: { this.state.email }
                </Label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}