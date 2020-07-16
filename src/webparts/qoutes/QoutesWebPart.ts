import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'QoutesWebPartStrings';
import Qoutes from './components/Qoutes';
import { IQoutesProps } from './components/IQoutesProps';

export interface IQoutesWebPartProps {
  qoutetext: string;
  author: string;
}

export default class QoutesWebPart extends BaseClientSideWebPart<IQoutesWebPartProps> {

  public render(): void {
    const comp: React.ReactElement<IQoutesProps> = React.createElement(
      Qoutes,
      {
        text: this.properties.qoutetext,
        name: this.properties.author
      }
    );

    ReactDom.render(comp, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('qoutetext', {
                  label: 'Qoutation',
                  resizable: true,
                  multiline: true
                }),
                PropertyPaneTextField('author', {
                  label: 'Author'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
