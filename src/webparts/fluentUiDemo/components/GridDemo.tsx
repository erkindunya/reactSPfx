import * as React from 'react';
import styles from './FluentUiDemo.module.scss';

import { Fabric, Label, TextField, DetailsList, DetailsListLayoutMode,
  IColumn, SelectionMode, Selection, ISelectionOptions, MarqueeSelection } from "office-ui-fabric-react";

import { sp } from "@pnp/sp/presets/all";


export interface ICourse {
  CourseID: number;
  Category: string;
  Title: string;
  Description?: string;
  Technology?: string;
  Duration: number;
  Price: number;
}

interface IGridDemoProps {
  context: any;
}

interface IGridDemoState {
  data: ICourse[];
  selectedData: ICourse[];
}


const columns : IColumn[] = [
  {
    key: "CourseID",
    name: "ID",
    fieldName: "CourseID",
    minWidth:50,
    maxWidth: 75,
    isResizable: false
  },
  {
    key: "Title",
    name: "Course Name",
    fieldName: "Title",
    minWidth:200,
    maxWidth: 350,
    isResizable: true
  },
  {
    key: "Category",
    name: "Category",
    fieldName: "Category",
    minWidth:200,
    maxWidth: 300,
    isResizable: true
  },
  {
    key: "Duration",
    name: "Hours",
    fieldName: "Duration",
    minWidth:150,
    maxWidth: 200,
    isResizable: true
  },
  {
    key: "Price",
    name: "Fees",
    fieldName: "Price",
    minWidth:150,
    maxWidth: 200,
    isResizable: true
  }
];

export default class GridDemo extends React.Component<IGridDemoProps, IGridDemoState> {
  private selections : Selection;

  constructor(props: IGridDemoProps) {
    super(props);

    sp.setup({
      spfxContext:this.props.context
    });

    this.selections = new Selection({
      onSelectionChanged: () => {
        let selCourses : ICourse[] = this.selections.getSelection() as ICourse[];

        this.setState({
          selectedData: selCourses
        });
      }
    });

    this.state = {
      data: [],
      selectedData: []
    };

  }

  public componentDidMount() {
    sp.web.lists.getByTitle("Courses").items.get<ICourse[]>()
      .then(items => {
          this.setState({
            data: items
          });
      })
      .catch(err => { 
        console.log("Error fetching courses!" + err);
      });
  }

  public render(): React.ReactElement<IGridDemoProps> {
    return (
        <Fabric>
          <MarqueeSelection selection= {this.selections}> 
              <DetailsList 
                items={ this.state.data }
                isHeaderVisible={ true }
                layoutMode={ DetailsListLayoutMode.justified }
                selectionMode={ SelectionMode.multiple }
                columns={ columns }
                selection={ this.selections }
              />
              </MarqueeSelection>
              <div>
                <Label>Selected Courses : ({ this.selections.getSelectedCount() })</Label>
                {
                  this.state.selectedData.map((c: ICourse) => <div>
                    {c.CourseID } <br/>
                    {c.Title }
                  </div>)
                }
              </div>
        </Fabric>
    );
  }
}