"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var DocumentCard_1 = require("office-ui-fabric-react/lib/DocumentCard");
var Image_1 = require("office-ui-fabric-react/lib/Image");
var TestImages_1 = require("../../../common/TestImages");
var DocumentCardBasicExample = /** @class */ (function (_super) {
    tslib_1.__extends(DocumentCardBasicExample, _super);
    function DocumentCardBasicExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentCardBasicExample.prototype.render = function () {
        var previewProps = {
            previewImages: [
                {
                    name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
                    linkProps: {
                        href: 'http://bing.com',
                        target: '_blank'
                    },
                    previewImageSrc: TestImages_1.TestImages.documentPreview,
                    iconSrc: TestImages_1.TestImages.iconPpt,
                    imageFit: Image_1.ImageFit.cover,
                    width: 318,
                    height: 196
                }
            ]
        };
        return (React.createElement(DocumentCard_1.DocumentCard, { onClickHref: "http://bing.com" },
            React.createElement(DocumentCard_1.DocumentCardPreview, tslib_1.__assign({}, previewProps)),
            React.createElement(DocumentCard_1.DocumentCardTitle, { title: "Large_file_name_with_underscores_used_to_separate_all_of_the_words_and_there_are_so_many_words_it_needs_truncating.pptx", shouldTruncate: true }),
            React.createElement(DocumentCard_1.DocumentCardActivity, { activity: "Created a few minutes ago", people: [{ name: 'Annie Lindqvist', profileImageSrc: TestImages_1.TestImages.personaFemale }] })));
    };
    return DocumentCardBasicExample;
}(React.PureComponent));
exports.DocumentCardBasicExample = DocumentCardBasicExample;
//# sourceMappingURL=DocumentCard.Basic.Example.js.map