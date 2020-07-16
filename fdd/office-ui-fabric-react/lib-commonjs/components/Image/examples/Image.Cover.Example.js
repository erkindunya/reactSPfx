"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Image_1 = require("office-ui-fabric-react/lib/Image");
var Label_1 = require("office-ui-fabric-react/lib/Label");
var ImageCoverExample = /** @class */ (function (_super) {
    tslib_1.__extends(ImageCoverExample, _super);
    function ImageCoverExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageCoverExample.prototype.render = function () {
        var imageProps = {
            src: 'http://placehold.it/500x500',
            imageFit: Image_1.ImageFit.cover
        };
        return (React.createElement("div", null,
            React.createElement("p", null, "Setting the imageFit property to \"cover\" will cause the image to scale up or down proportionally, while cropping from either the top and bottom or sides to completely fill the frame."),
            React.createElement(Label_1.Label, null, "The image has a wider aspect ratio (more landscape) than the frame, so the image is scaled to fit the height and the sides are cropped evenly."),
            React.createElement(Image_1.Image, tslib_1.__assign({}, imageProps, { alt: "Example implementation of the property image fit using the cover value on an image wider than the frame.", width: 150, height: 250 })),
            React.createElement("br", null),
            React.createElement(Label_1.Label, null, "The image has a taller aspect ratio (more portrait) than the frame, so the image is scaled to fit the width and the top and bottom are cropped evenly."),
            React.createElement(Image_1.Image, tslib_1.__assign({}, imageProps, { alt: "Example implementation of the property image fit using the cover value on an image taller than the frame.", width: 250, height: 150 }))));
    };
    return ImageCoverExample;
}(React.Component));
exports.ImageCoverExample = ImageCoverExample;
//# sourceMappingURL=Image.Cover.Example.js.map