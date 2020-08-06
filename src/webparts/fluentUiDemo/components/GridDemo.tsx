import * as React from 'react';
import styles from './FluentUiDemo.module.scss';

import { CourseProvider } from "../../../services/CourseProvider";

import { Fabric, Label, TextField, DetailsList, DetailsListLayoutMode,
  IColumn, SelectionMode, Selection, MarqueeSelection, Panel, PanelType } from "office-ui-fabric-react";

import { ModifyCourse } from "./ModifyCourse";


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
  original:  ICourse[];
  data: ICourse[];
  selectedData: ICourse[];
  columns: IColumn[];
  currentItem: ICourse;
  showPane:boolean;
  categories:string[]
}


export default class GridDemo extends React.Component<IGridDemoProps, IGridDemoState> {
  private selections : Selection;
  private provider : CourseProvider;
  
  private handleColumnClick = (event, column: IColumn) => {
    
    const columns = this.state.columns.slice();
    const data = this.state.data.slice();

    const newColumns: IColumn[] = columns.slice();
    const currCol : IColumn = newColumns.filter(c => column.key === c.key)[0];

    newColumns.forEach((c: IColumn) => {
      if(c===currCol) {
        currCol.isSortedDescending = !currCol.isSortedDescending;
        currCol.isSorted = true;
      } else {
        c.isSorted = false;
        c.isSortedDescending = true;
      }
    });

    // Actual Sort
    const sortedItems = this.sortItems<ICourse>(data,currCol.fieldName,currCol.isSortedDescending);

    this.setState({
      data: sortedItems,
      columns: newColumns
    });
  }
  
  private columns : IColumn[] = [
  {
    key: "CourseID",
    name: "ID",
    fieldName: "CourseID",
    minWidth:50,
    maxWidth: 75,
    isResizable: false,
    onColumnClick: this.handleColumnClick
  },
  {
    key: "Title",
    name: "Course Name",
    fieldName: "Title",
    minWidth:200,
    maxWidth: 350,
    isResizable: true,
    onColumnClick: this.handleColumnClick
  },
  {
    key: "Category",
    name: "Category",
    fieldName: "Category",
    minWidth:200,
    maxWidth: 300,
    isResizable: true,
    onColumnClick: this.handleColumnClick
  },
  {
    key: "Duration",
    name: "Hours",
    fieldName: "Duration",
    minWidth:150,
    maxWidth: 200,
    isResizable: true,
    onColumnClick: this.handleColumnClick
  },
  {
    key: "Price",
    name: "Fees",
    fieldName: "Price",
    minWidth:150,
    maxWidth: 200,
    isResizable: true,
    onColumnClick: this.handleColumnClick
  }
];

  constructor(props: IGridDemoProps) {
    super(props);

    this.provider = new CourseProvider("Courses",this.props.context);

    this.selections = new Selection({
      onSelectionChanged: () => {
        let selCourses : ICourse[] = this.selections.getSelection() as ICourse[];

        this.setState({
          selectedData: selCourses,
          currentItem: selCourses[0],
          showPane: true
        });
      }
    });

    this.state = {
      original: [],
      data: [],
      selectedData: [],
      columns: this.columns,
      currentItem: null,
      showPane: false,
      categories:[]
    };

  }

  public componentDidMount() {
    this.provider.getCategories()
      .then(items=>{
        this.setState({
          categories:items
        });
      });

    this.provider.getItems()
      .then(items => {
          this.setState({
            original: items,
            data: items
          });
      })
      .catch(err => { 
        console.log("Error fetching courses!" + err);
      });
  }


  private sortItems<T>(items: T[], fieldName: string,sortDesc: boolean) : T[] {

    const key = fieldName as keyof T;

    return items.slice(0).sort((a: T, b: T) => ((sortDesc ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));

  }

  public render(): React.ReactElement<IGridDemoProps> {
    return (
        <Fabric>
            <TextField label="Search :" onChange={ (e,value: string) => {
                this.setState({
                  data: value ? this.state.original
                    .filter(c => c.Title.toLowerCase().indexOf(value.toLowerCase())>-1 || 
                                 c.Category.toLowerCase().indexOf(value.toLowerCase())>-1 ) : this.state.original
                });
            }} /><br/>
            <MarqueeSelection selection={ this.selections }>
              <DetailsList 
                items={ this.state.data }
                isHeaderVisible={ true }
                layoutMode={ DetailsListLayoutMode.justified }
                selectionMode={ SelectionMode.single }
                columns={ this.state.columns }
                selection={ this.selections }
                compact={ true }
              />
            </MarqueeSelection>
            <Panel type={ PanelType.medium } isOpen={ this.state.showPane } onDismiss={ ()=> {
              this.setState({
                showPane: false
              });
            }}>
              <div> 
                <h2>Edit Course</h2>
                <ModifyCourse id={ this.state.currentItem["ID"]} 
                    provider={ this.provider }
                    categories={this.state.categories}

                    onCancel={ () =>{
                      this.setState({
                        showPane:false
                      });
                    }}

                    onSaved={ ()=>{
                      
                    }}
                    />
              </div>
            </Panel>

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
