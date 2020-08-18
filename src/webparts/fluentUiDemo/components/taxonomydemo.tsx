import * as React from 'react';
import styles from './FluentUiDemo.module.scss';

import { Label } from "office-ui-fabric-react";

import { TaxonomyPicker, IPickerTerms } from "@pnp/spfx-controls-react/lib/TaxonomyPicker";

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
                <TaxonomyPicker context={ this.props.context } label="Pick a Term:"
                    panelTitle="Select Term"
                    termsetNameOrID="Categories"
                    isTermSetSelectable={ false }
                    allowMultipleSelections={ true }
                    placeholder="Select Category"
                    onChange={ (terms: IPickerTerms) => {
                        let selTerms: string[] = [];

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