import * as React from 'react';
import styles from './FluentUiDemo.module.scss';

import { Label } from "office-ui-fabric-react";

import { TaxonomyPicker, IPickerTerms } from "@pnp/spfx-controls-react/lib/TaxonomyPicker";

const initVal : IPickerTerms = [
    {
      "name": "Cloud",
      "key": "53ab5ed9-990d-46d0-9c2e-58fbe4162ec9", // change this depend on envirnment
      "path": "Cloud",
      "termSet": "d3964f36-6120-486e-921c-07adb73357b9" // change this depend on envirnment
    },
    {
      "name": "DevOps",
      "key": "de8d81ac-2284-4979-bc94-89f16ce00fa0", // change this depend on envirnment
      "path": "DevOps",
      "termSet": "d3964f36-6120-486e-921c-07adb73357b9" // change this depend on envirnment
    }];

export default class TaxonomyDemo extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            selectedTerms: []
        };
    }

    public render(): JSX.Element {
        return (
            <div>
                <TaxonomyPicker context={ this.props.context } 
                    initialValues={ initVal }
                    label="Pick a Term:"
                    panelTitle="Select Term"
                    termsetNameOrID="Categories"
                    isTermSetSelectable={ false }
                    allowMultipleSelections={ true }
                    placeholder="Select Category"
                    onChange={ (terms: IPickerTerms) => {
                        let selTerms: string[] = [];

                        console.log("Terms: " + JSON.stringify(terms));

                        for(let t of terms) {
                            selTerms.push(t.name);
                        }

                        this.setState({
                            selectedTerms: selTerms
                        });
                    }}
                />
                <Label>Selected Term Names : </Label><br/>
                {
                    this.state.selectedTerms.map(t => <Label>{ t }</Label>)
                }
            </div>
        );
    }
}