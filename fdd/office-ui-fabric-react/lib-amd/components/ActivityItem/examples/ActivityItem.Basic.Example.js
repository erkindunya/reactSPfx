define(["require", "exports", "tslib", "react", "office-ui-fabric-react"], function (require, exports, tslib_1, React, office_ui_fabric_react_1) {
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
    var ActivityItemBasicExample = /** @class */ (function (_super) {
        tslib_1.__extends(ActivityItemBasicExample, _super);
        function ActivityItemBasicExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ActivityItemBasicExample.prototype.render = function () {
            // tslint:disable:jsx-no-lambda
            var activityItemExamples = [
                {
                    key: 1,
                    activityDescription: [
                        React.createElement(office_ui_fabric_react_1.Link, { key: 1, className: office_ui_fabric_react_1.css(classNames.nameText), onClick: function () {
                                alert('A name was clicked.');
                            } }, "Philippe Lampros"),
                        React.createElement("span", { key: 2 }, " commented")
                    ],
                    activityIcon: React.createElement(office_ui_fabric_react_1.Icon, { iconName: 'Message' }),
                    comments: [
                        React.createElement("span", { key: 1 }, "Hello! I am making a comment and mentioning "),
                        React.createElement(office_ui_fabric_react_1.Link, { key: 2, className: office_ui_fabric_react_1.css(classNames.nameText), onClick: function () {
                                alert('An @mentioned name was clicked.');
                            } }, "@An\u0111ela Debeljak"),
                        React.createElement("span", { key: 3 }, " in the text of the comment.")
                    ],
                    timeStamp: 'Just now'
                },
                {
                    key: 2,
                    activityDescription: [
                        React.createElement(office_ui_fabric_react_1.Link, { key: 1, className: office_ui_fabric_react_1.css(classNames.nameText), onClick: function () {
                                alert('A name was clicked.');
                            } }, "Lisha Refai"),
                        React.createElement("span", { key: 2 }, " deleted "),
                        React.createElement("span", { key: 3, className: office_ui_fabric_react_1.css(classNames.nameText) }, "DocumentTitle.docx")
                    ],
                    activityIcon: React.createElement(office_ui_fabric_react_1.Icon, { iconName: 'Trash' }),
                    timeStamp: '2 hours ago'
                },
                {
                    key: 3,
                    activityDescription: [
                        React.createElement(office_ui_fabric_react_1.Link, { key: 1, className: office_ui_fabric_react_1.css(classNames.nameText), onClick: function () {
                                alert('A name was clicked.');
                            } }, "Julian Arvidsson"),
                        React.createElement("span", { key: 2 }, " moved "),
                        React.createElement(office_ui_fabric_react_1.Link, { key: 3, className: office_ui_fabric_react_1.css(classNames.nameText), onClick: function () {
                                alert('A document was clicked.');
                            } }, "PresentationTitle.pptx"),
                        React.createElement("span", { key: 4 }, " to "),
                        React.createElement(office_ui_fabric_react_1.Link, { key: 5, className: office_ui_fabric_react_1.css(classNames.nameText), onClick: function () {
                                alert('A folder was clicked.');
                            } }, "Destination Folder")
                    ],
                    activityIcon: React.createElement(office_ui_fabric_react_1.Icon, { iconName: 'FabricMovetoFolder' }),
                    timeStamp: 'Yesterday'
                }
            ];
            var activityExampleList = [];
            activityItemExamples.forEach(function (item) {
                var props = item;
                activityExampleList.push(React.createElement(office_ui_fabric_react_1.ActivityItem, tslib_1.__assign({}, props, { key: item.key, className: office_ui_fabric_react_1.css(classNames.exampleRoot) })));
            });
            return React.createElement("div", null, activityExampleList);
        };
        return ActivityItemBasicExample;
    }(React.Component));
    exports.ActivityItemBasicExample = ActivityItemBasicExample;
});
//# sourceMappingURL=ActivityItem.Basic.Example.js.map