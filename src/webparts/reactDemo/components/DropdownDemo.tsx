import * as React from 'react';
import styles from './ReactDemo.module.scss';
import { IReactDemoProps } from './IReactDemoProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { sp } from "@pnp/sp/presets/all";

interface ICategory {
    Title: string;
}

interface IState {
    categories: ICategory[];
    categoryid: number;
    customername: string;
}

export default class DropdownDemo extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            categories: [],
            categoryid: 0,
            customername: ""
        };

        sp.setup({
            spfxContext: this.props.context
        });
    }

    public componentDidMount() {
        this.getCategories();


    }

    public render(): React.ReactElement<IReactDemoProps> {
        return (
            <div className={styles.reactDemo}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.column}>
                            <span className={styles.title}>Cascadeing DropDown Demo!</span>
                            <div>
                                <select name="category">
                                    {
                                        this.state.categories.map((c: ICategory) => <option value={c["ID"]}>{c.Title}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private getCategories() {
        sp.web.lists.getByTitle('Categories').items.get()
            .then((items: ICategory[]) => {
                this.setState({
                    categories: items
                });
            });
    }
}