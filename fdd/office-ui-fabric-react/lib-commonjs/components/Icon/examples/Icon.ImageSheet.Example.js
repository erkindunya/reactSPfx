"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Icon_1 = require("office-ui-fabric-react/lib/Icon");
require("./IconExample.scss");
var TestImages_1 = require("../../../common/TestImages");
var IconImageSheetExample = /** @class */ (function (_super) {
    tslib_1.__extends(IconImageSheetExample, _super);
    function IconImageSheetExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconImageSheetExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Icon_1.Icon, { iconType: Icon_1.IconType.image, className: 'ms-IconImageSheetExample-one', imageProps: {
                    src: TestImages_1.TestImages.iconOne,
                    className: 'ms-IconImageSheetExample-one-image'
                } }),
            React.createElement(Icon_1.Icon, { iconType: Icon_1.IconType.image, className: 'ms-IconImageSheetExample-check', imageProps: {
                    src: TestImages_1.TestImages.iconOne,
                    className: 'ms-IconImageSheetExample-check-image'
                } }),
            React.createElement(Icon_1.Icon, { iconType: Icon_1.IconType.image, className: 'ms-IconImageSheetExample-lock', imageProps: {
                    src: TestImages_1.TestImages.iconOne,
                    className: 'ms-IconImageSheetExample-lock-image'
                } })));
    };
    return IconImageSheetExample;
}(React.Component));
exports.IconImageSheetExample = IconImageSheetExample;
//# sourceMappingURL=Icon.ImageSheet.Example.js.map