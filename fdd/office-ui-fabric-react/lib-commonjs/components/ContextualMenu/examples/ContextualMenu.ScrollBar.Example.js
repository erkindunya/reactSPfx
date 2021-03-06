"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ContextualMenu_1 = require("office-ui-fabric-react/lib/ContextualMenu");
var Button_1 = require("office-ui-fabric-react/lib/Button");
require("./ContextualMenuExample.scss");
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
//# sourceMappingURL=ContextualMenu.ScrollBar.Example.js.map