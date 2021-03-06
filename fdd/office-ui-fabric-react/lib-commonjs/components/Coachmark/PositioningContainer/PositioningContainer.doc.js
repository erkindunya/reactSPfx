"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PositioningContainer_Basic_Example_1 = require("./examples/PositioningContainer.Basic.Example");
var CoachmarkBasicExampleCode = require('!raw-loader!experiments/src/components/PositioningContainer/examples/PositioningContainer.Basic.Example.tsx');
exports.PositioningContainerPageProps = {
    title: 'PositioningContainer',
    componentName: 'PositioningContainer',
    componentUrl: 'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/PositioningContainer',
    examples: [
        {
            title: 'Positioning Container Basic',
            code: CoachmarkBasicExampleCode,
            view: React.createElement(PositioningContainer_Basic_Example_1.PositioningContainerBasicExample, null)
        }
    ],
    propertiesTablesSources: [require('!raw-loader!experiments/src/components/PositioningContainer/PositioningContainer.types.ts')],
    overview: '',
    bestPractices: '',
    dos: '',
    donts: '',
    isHeaderVisible: true
};
//# sourceMappingURL=PositioningContainer.doc.js.map