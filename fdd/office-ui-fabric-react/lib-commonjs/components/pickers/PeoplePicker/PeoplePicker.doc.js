"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PeoplePicker_Types_Example_1 = require("./examples/PeoplePicker.Types.Example");
var PeoplePickerTypesExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/examples/PeoplePicker.Types.Example.tsx');
exports.PeoplePickerPageProps = {
    title: 'PeoplePicker',
    componentName: 'PeoplePicker',
    componentUrl: 'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/PeoplePicker',
    examples: [
        {
            title: 'People Pickers',
            code: PeoplePickerTypesExampleCode,
            view: React.createElement(PeoplePicker_Types_Example_1.PeoplePickerTypesExample, null)
        }
    ],
    propertiesTablesSources: [require('!raw-loader!office-ui-fabric-react/src/components/pickers/BasePicker.types.ts')],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/docs/PeoplePickerOverview.md'),
    bestPractices: require('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/docs/PeoplePickerBestPractices.md'),
    dos: require('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/docs/PeoplePickerDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/docs/PeoplePickerDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true
};
//# sourceMappingURL=PeoplePicker.doc.js.map