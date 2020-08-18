import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'FluentUiDemoWebPartStrings';
// import GridDemo from "./components/GridDemo";
// import StackDemo from "./components/StackDemo";

// import NavDemo from "./components/NavDemo";
//import NavBarDemo from "./components/NavBarDemo";
//import PivotDemo from "./components/PivotDemo";

import TaxonomyDemo from "./components/taxonomydemo";
export interface IFluentUiDemoWebPartProps {
  description: string;
}

export default class FluentUiDemoWebPart extends BaseClientSideWebPart <IFluentUiDemoWebPartProps> {

  public render(): void {
    const element = React.createElement(
      TaxonomyDemo,
      {
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
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
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}