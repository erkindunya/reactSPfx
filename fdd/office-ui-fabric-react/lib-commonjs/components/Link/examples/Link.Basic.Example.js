"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Link_1 = require("office-ui-fabric-react/lib/Link");
var styles = require("./Link.Example.scss");
var LinkBasicExample = /** @class */ (function (_super) {
    tslib_1.__extends(LinkBasicExample, _super);
    function LinkBasicExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LinkBasicExample.prototype.render = function () {
        return (React.createElement("div", { className: styles.linkExample },
            React.createElement("span", null, "When a link has an href, "),
            React.createElement(Link_1.Link, { href: "http://dev.office.com/fabric/components/link" }, "it renders as an anchor tag."),
            React.createElement("span", null, " Without an href, "),
            React.createElement(Link_1.Link, null, "the link is rendered as a button"),
            ".",
            React.createElement("span", null, " You can also use the disabled attribute to create a "),
            React.createElement(Link_1.Link, { disabled: true, href: "http://dev.office.com/fabric/components/link" }, "disabled link."),
            React.createElement("span", null,
                ' ',
                "Example of a Link with ",
                React.createElement(Link_1.Link, { href: "http://dev.office.com/fabric/components/link" }, "mixed link content that wraps.")),
            React.createElement("br", null),
            React.createElement("br", null),
            "It's not recommended to use Links with imgs because Links are meant to render textual inline content. Buttons are inline-block or in the case of imgs, block. However, it is possible to create a linked image button by making a button with an unstyled variant and adding the img content and href source to that."));
    };
    return LinkBasicExample;
}(React.Component));
exports.LinkBasicExample = LinkBasicExample;
//# sourceMappingURL=Link.Basic.Example.js.map