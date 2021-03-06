define(["require", "exports", "tslib", "react", "office-ui-fabric-react", "../../../common/TestImages"], function (require, exports, tslib_1, React, office_ui_fabric_react_1, TestImages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var exampleStyles = {
        exampleRoot: {
            marginTop: '20px'
        },
        nameText: {
            fontWeight: 'bold'
        }
    };
    var getClassNames = office_ui_fabric_react_1.classNamesFunction();
    var classNames = getClassNames(exampleStyles, {});
    var ActivityItemPersonaExample = /** @class */ (function (_super) {
        tslib_1.__extends(ActivityItemPersonaExample, _super);
        function ActivityItemPersonaExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ActivityItemPersonaExample.prototype.render = function () {
            // tslint:disable:jsx-no-lambda
            var activityItemExamples = [
                {
                    key: 1,
                    activityDescription: [
                        React.createElement(office_ui_fabric_react_1.Link, { key: 1, className: office_ui_fabric_react_1.css(classNames.nameText), onClick: function () {
                                alert('A name was clicked.');
                            } }, "Jack Howden"),
                        React.createElement("span", { key: 2 }, " renamed "),
                        React.createElement("span", { key: 3, className: office_ui_fabric_react_1.css(classNames.nameText) }, "DocumentTitle.docx")
                    ],
                    activityPersonas: [
                        {
                            imageUrl: TestImages_1.TestImages.personaMale
                        }
                    ],
                    comments: 'Hello, this is the text of my basic comment!',
                    timeStamp: '23m ago'
                },
                {
                    key: 2,
                    activityDescription: [
                        React.createElement(office_ui_fabric_react_1.Link, { key: 1, className: office_ui_fabric_react_1.css(classNames.nameText), onClick: function () {
                                alert('A name was clicked.');
                            } }, "Javiera M\u00E1rquez"),
                        React.createElement("span", { key: 2 }, " and "),
                        React.createElement(office_ui_fabric_react_1.Link, { key: 3, className: office_ui_fabric_react_1.css(classNames.nameText), onClick: function () {
                                alert('A name was clicked.');
                            } }, "Amelia Poval\u0456y"),
                        React.createElement("span", { key: 4 }, " edited "),
                        React.createElement(office_ui_fabric_react_1.Link, { key: 5, className: office_ui_fabric_react_1.css(classNames.nameText), onClick: function () {
                                alert('A document was clicked.');
                            } }, "SpreadsheetTitle.xlsx")
                    ],
                    activityPersonas: [
                        {
                            imageInitials: 'JM',
                            text: 'Javiera Márquez'
                        },
                        {
                            imageUrl: TestImages_1.TestImages.personaFemale
                        }
                    ],
                    timeStamp: '9:27 am'
                },
                {
                    key: 3,
                    activityDescription: [
                        React.createElement(office_ui_fabric_react_1.Link, { key: 1, className: office_ui_fabric_react_1.css(classNames.nameText), onClick: function () {
                                alert('A name was clicked.');
                            } }, "Robert Larsson"),
                        React.createElement("span", { key: 2 }, " and "),
                        React.createElement(office_ui_fabric_react_1.Link, { key: 3, className: office_ui_fabric_react_1.css(classNames.nameText), onClick: function () {
                                alert('A name was clicked.');
                            } }, "2 others"),
                        React.createElement("span", { key: 4 }, " commented ")
                    ],
                    activityPersonas: [
                        {
                            imageInitials: 'RL',
                            text: 'Robert Larsson'
                        },
                        {
                            imageUrl: TestImages_1.TestImages.personaMale
                        },
                        {
                            imageUrl: TestImages_1.TestImages.personaFemale
                        }
                    ],
                    timeStamp: '3 days ago'
                },
                {
                    key: 4,
                    activityDescription: [
                        React.createElement(office_ui_fabric_react_1.Link, { key: 1, className: office_ui_fabric_react_1.css(classNames.nameText), onClick: function () {
                                alert('A name was clicked.');
                            } }, "Jin Cheng"),
                        React.createElement("span", { key: 2 }, " and "),
                        React.createElement(office_ui_fabric_react_1.Link, { key: 3, className: office_ui_fabric_react_1.css(classNames.nameText), onClick: function () {
                                alert('A name was clicked.');
                            } }, "5 others"),
                        React.createElement("span", { key: 4 }, " edited this file")
                    ],
                    activityPersonas: [
                        {
                            imageInitials: 'JC',
                            text: 'Jin Cheng'
                        },
                        {
                            imageUrl: TestImages_1.TestImages.personaMale
                        },
                        {
                            imageInitials: 'AL',
                            text: 'Annie Lindqvist'
                        },
                        {
                            imageUrl: TestImages_1.TestImages.personaFemale
                        },
                        {
                            imageUrl: TestImages_1.TestImages.personaMale
                        },
                        {
                            imageUrl: TestImages_1.TestImages.personaMale
                        }
                    ],
                    timeStamp: 'August 3, 2017'
                }
            ];
            var activityExampleList = [];
            activityItemExamples.forEach(function (item) {
                var props = item;
                activityExampleList.push(React.createElement(office_ui_fabric_react_1.ActivityItem, tslib_1.__assign({}, props, { key: item.key, className: office_ui_fabric_react_1.css(classNames.exampleRoot) })));
            });
            return React.createElement("div", null, activityExampleList);
        };
        return ActivityItemPersonaExample;
    }(React.Component));
    exports.ActivityItemPersonaExample = ActivityItemPersonaExample;
});
//# sourceMappingURL=ActivityItem.Persona.Example.js.map