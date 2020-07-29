import * as React from "react";
import styles from "./FluentUiDemo.module.scss";

import { Label, TextField, PrimaryButton } from "office-ui-fabric-react";
import { transitionKeysAreEqual } from "office-ui-fabric-react/lib/utilities/keytips/IKeytipTransitionKey";

export default class TempConverter extends React.Component<
  IFluentUiDemoProps,
  any
> {
  constructor(props: IFluentUiDemoProps) {
    super(props);

    this.state = {
      TempInC: "",
      TempInF: "",
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
                <Label>Temperature Converter</Label>
                <TextField
                  label="Temp (C): "
                  onChange={(event, value) => {
                    this.setState({
                      TempInC: value,
                    });
                  }}
                />{" "}
                <PrimaryButton text=" Save " />
                <Label>Temp(F):</Label>{" "}
              </div>
              <div className={styles.text}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
