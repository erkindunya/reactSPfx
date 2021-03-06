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
    var ActivityItemCompactExample = /** @class */ (function (_super) {
        tslib_1.__extends(ActivityItemCompactExample, _super);
        function ActivityItemCompactExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ActivityItemCompactExample.prototype.render = function () {
            var activityItemExamples = [
                {
                    key: 1,
                    activityDescription: [
                        React.createElement("span", { key: 1, className: office_ui_fabric_react_1.css(classNames.nameText) }, "Tahlia Whittle"),
                        React.createElement("span", { key: 2 }, " edited this file")
                    ],
                    activityPersonas: [
                        {
                            imageUrl: TestImages_1.TestImages.personaFemale
                        }
                    ],
                    isCompact: true
                },
                {
                    key: 2,
                    activityDescription: [
                        React.createElement("span", { key: 1, className: office_ui_fabric_react_1.css(classNames.nameText) }, "Patrick Loton"),
                        React.createElement("span", { key: 2 }, " and "),
                        React.createElement("span", { key: 3, className: office_ui_fabric_react_1.css(classNames.nameText) },
                            ' ',
                            "6 others")
                    ],
                    activityPersonas: [
                        {
                            imageInitials: 'PT',
                            text: 'Robert Larsson'
                        },
                        {
                            imageUrl: TestImages_1.TestImages.personaMale
                        },
                        {
                            imageInitials: 'EC',
                            text: 'Eduarda Costa'
                        }
                    ],
                    isCompact: true
                },
                {
                    key: 3,
                    activityDescription: [
                        React.createElement("span", { key: 1, className: office_ui_fabric_react_1.css(classNames.nameText) }, "Sabrina De Luca"),
                        React.createElement("span", { key: 2 }, " added this file")
                    ],
                    activityIcon: React.createElement(office_ui_fabric_react_1.Icon, { iconName: 'Add' }),
                    isCompact: true
                },
                {
                    key: 4,
                    activityDescription: [
                        React.createElement("span", { key: 1, className: office_ui_fabric_react_1.css(classNames.nameText) }, "Chuan Rojumanong"),
                        React.createElement("span", { key: 2 }, " shared this file")
                    ],
                    activityIcon: React.createElement(office_ui_fabric_react_1.Icon, { iconName: 'Share' }),
                    isCompact: true
                }
            ];
            var activityExampleList = [];
            activityItemExamples.forEach(function (item) {
                var props = item;
                activityExampleList.push(React.createElement(office_ui_fabric_react_1.ActivityItem, tslib_1.__assign({}, props, { key: item.key, className: office_ui_fabric_react_1.css(classNames.exampleRoot) })));
            });
            return React.createElement("div", null, activityExampleList);
        };
        return ActivityItemCompactExample;
    }(React.Component));
    exports.ActivityItemCompactExample = ActivityItemCompactExample;
});
//# sourceMappingURL=ActivityItem.Compact.Example.js.map