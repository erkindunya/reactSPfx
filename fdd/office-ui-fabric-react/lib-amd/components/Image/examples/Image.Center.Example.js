define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Image", "office-ui-fabric-react/lib/Label"], function (require, exports, tslib_1, React, Image_1, Label_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ImageCenterExample = /** @class */ (function (_super) {
        tslib_1.__extends(ImageCenterExample, _super);
        function ImageCenterExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ImageCenterExample.prototype.render = function () {
            var imageProps = {
                src: 'http://placehold.it/800x300',
                imageFit: Image_1.ImageFit.center,
                width: 350,
                height: 150,
                onLoad: function (ev) { return console.log('image loaded', ev); }
            };
            return (React.createElement("div", null,
                React.createElement("p", null, "Setting the imageFit property to \"center\" behaves the same as \"none\", while centering the image within the frame."),
                React.createElement(Label_1.Label, null, "The image is larger than the frame, so all sides are cropped to center the image."),
                React.createElement(Image_1.Image, tslib_1.__assign({}, imageProps, { src: "http://placehold.it/800x300", alt: "Example implementation of the property image fit using the center value on an image larger than the frame." })),
                React.createElement("br", null),
                React.createElement(Label_1.Label, null, "The image is smaller than the frame, so there is empty space within the frame. The image is centered in the available space."),
                React.createElement(Image_1.Image, tslib_1.__assign({}, imageProps, { src: "http://placehold.it/100x100", alt: "Example implementation of the property image fit using the center value on an image smaller than the frame." }))));
        };
        return ImageCenterExample;
    }(React.Component));
    exports.ImageCenterExample = ImageCenterExample;
});
//# sourceMappingURL=Image.Center.Example.js.map