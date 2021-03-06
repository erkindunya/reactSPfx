define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/ContextualMenu", "office-ui-fabric-react/lib/Button", "./ContextualMenuExample.scss"], function (require, exports, tslib_1, React, ContextualMenu_1, Button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContextualMenuWithScrollBarExample = /** @class */ (function (_super) {
        tslib_1.__extends(ContextualMenuWithScrollBarExample, _super);
        function ContextualMenuWithScrollBarExample(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                showCallout: false
            };
            return _this;
        }
        ContextualMenuWithScrollBarExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Button_1.DefaultButton, { text: "Click for ContextualMenu", menuProps: {
                        shouldFocusOnMount: true,
                        directionalHint: ContextualMenu_1.DirectionalHint.bottomRightEdge,
                        directionalHintFixed: true,
                        items: [
                            {
                                key: 'newItem',
                                text: 'New'
                            },
                            {
                                key: 'item 2',
                                text: 'Item with a very long label text'
                            },
                            {
                                key: 'edit',
                                text: 'Edit'
                            },
                            {
                                key: 'properties',
                                text: 'Properties'
                            },
                            {
                                key: 'disabled',
                                text: 'Disabled item',
                                disabled: true
                            }
                        ],
                        calloutProps: {
                            calloutMaxHeight: 65
                        }
                    } })));
        };
        return ContextualMenuWithScrollBarExample;
    }(React.Component));
    exports.ContextualMenuWithScrollBarExample = ContextualMenuWithScrollBarExample;
});
//# sourceMappingURL=ContextualMenu.ScrollBar.Example.js.map