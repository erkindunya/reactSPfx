define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Image", "office-ui-fabric-react/lib/Label"], function (require, exports, tslib_1, React, Image_1, Label_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ImageNoneExample = /** @class */ (function (_super) {
        tslib_1.__extends(ImageNoneExample, _super);
        function ImageNoneExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ImageNoneExample.prototype.render = function () {
            var imageProps = {
                src: 'http://placehold.it/500x250',
                imageFit: Image_1.ImageFit.none,
                width: 350,
                height: 150
            };
            return (React.createElement("div", null,
                React.createElement("p", null, "By setting the imageFit property to \"none\", the image will remain at its natural size, even if the frame is made larger or smaller by setting the width and height props."),
                React.createElement(Label_1.Label, null, "The image is larger than the frame, so it is cropped to fit. The image is positioned at the upper left of the frame."),
                React.createElement(Image_1.Image, tslib_1.__assign({}, imageProps, { alt: "Example implementation of the property image fit using the none value on an image larger than the frame." })),
                React.createElement("br", null),
                React.createElement(Label_1.Label, null, "The image is smaller than the frame, so there is empty space within the frame. The image is positioned at the upper left of the frame."),
                React.createElement(Image_1.Image, tslib_1.__assign({}, imageProps, { src: "http://placehold.it/100x100", alt: "Example implementation of the property image fit using the none value on an image smaller than the frame." }))));
        };
        return ImageNoneExample;
    }(React.Component));
    exports.ImageNoneExample = ImageNoneExample;
});
//# sourceMappingURL=Image.None.Example.js.map