import * as React from 'react';
import styles from './FluentUiDemo.module.scss';
import { IFluentUiDemoProps } from './IFluentUiDemoProps';

import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";

import { Fabric, Label, NormalPeoplePicker, IPersonaProps } from "office-ui-fabric-react";


interface IPeoplePickerState {
  selUsers: IPersonaProps[]
}

interface IPeoplePickerProps {
  context?: any;
}

const userData = [
  {
    userid: "Vijay",
    username: "Vijay N",
    email: "vijay@abc.com"
  },
  {
    userid: "Ram",
    username: "Ram Kumar",
    email: "ram@abc.com"
  },
  {
    userid: "John",
    username: "John B",
    email: "john@abc.com"
  },
  {
    userid: "Ramesh",
    username: "Ramesh K",
    email: "ramesh@abc.com"
  }
];

export default class PeoplePickerDemo extends React.Component<IPeoplePickerProps, IPeoplePickerState> {

  constructor(props: IPeoplePickerProps) {
    super(props);

    this.state = {
      selUsers: []
    };
  }

  private findUsers = (value: string): IPersonaProps[] => {
    if (value.length > 2) {
      let matches = userData.filter(u => u.userid.toLowerCase().indexOf(value.toLowerCase()) > -1);

      let retValues = matches.map(p => {
        return {
          text: p.userid,
          primaryText: p.username,
          secondaryText: p.email
        } as IPersonaProps;
      });

      return retValues;
    }

    return [];
  }


  private searchPeople = (text: string): IPersonaProps[] | Promise<IPersonaProps[]> => {
    let url: string = `${this.props.context.pageContext.web.absoluteUrl}/_api/search/query?querytext='*${text}*'&rowlimit=10&sourceid='b09a7990-05ea-4af9-81ef-edfab16c4e31'`;

    if (text.length > 2) {

      return this.props.context.spHttpClient.get(url, SPHttpClient.configurations.v1, {
        headers: {
          'Accept': 'application/json;odata=nometadata',
          'odata-version': ''
        }
      }).then((resp: SPHttpClientResponse): Promise<{ PrimaryQueryResult: any }> => {
        return resp.json();
      }).then((results: { PrimaryQueryResult: any }) => {

        console.log("Results : " + JSON.stringify(results));

        let relevantResults: any = results.PrimaryQueryResult.RelevantResults;
        let resultCount: number = relevantResults.TotalRows;

        let people = [];

        if (resultCount > 0) {
          relevantResults.Table.Rows.forEach((row) => {
            let person: IPersonaProps = {};

            row.Cells.forEach((cell) => {
              if (cell.Key === 'jobTitle')
                person.secondaryText = cell.Value;
              if (cell.Key === 'PictureURL')
                person.imageUrl = cell.Value;
              if (cell.Key === 'PreferredName')
                person.primaryText = cell.Value;
            });

            people.push(person);
          });
        }

        console.log("Matches: " + JSON.stringify(people));

        return Promise.resolve(people);
      }).catch(err => {
        console.log("People Search Error: " + err);
        return Promise.reject(err);
      });

    }

    return [];
  }


  public render(): React.ReactElement<IFluentUiDemoProps> {
    return (
      <Fabric>
        <div>
          Select Users: <NormalPeoplePicker onResolveSuggestions={this.searchPeople}
            onChange={(items: IPersonaProps[]) => {
              this.setState({
                selUsers: items
              });
            }} />
        </div>
        <div>
          <Label>SELECTED USERS:</Label>
          {
            this.state.selUsers.map(u => <Label>{u.primaryText} - {u.secondaryText} <br /></Label>)
          }
        </div>
      </Fabric>
    );
  }
}