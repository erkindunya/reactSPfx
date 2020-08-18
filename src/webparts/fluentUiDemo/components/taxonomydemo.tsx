import * as React from 'react';
import styles from './FluentUiDemo.module.scss';

import { TaxonomyPicker } from "@pnp/spfx-controls-react/lib/TaxonomyPicker";

export default class TaxonomyDemo extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <TaxonomyPicker context={ this.props.context } label="Pick a Term:"
                panelTitle="Select Term"
                termsetNameOrID="Categories"
                allowMultipleSelections={ false }
            />
        );
    }
}