"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var DocumentCard_1 = require("office-ui-fabric-react/lib/DocumentCard");
var Image_1 = require("office-ui-fabric-react/lib/Image");
var TestImages_1 = require("../../../common/TestImages");
var DocumentCardCompleteExample = /** @class */ (function (_super) {
    tslib_1.__extends(DocumentCardCompleteExample, _super);
    function DocumentCardCompleteExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentCardCompleteExample.prototype.render = function () {
        var previewProps = {
            getOverflowDocumentCountText: function (overflowCount) { return "+" + overflowCount + " more"; },
            previewImages: [
                {
                    name: '2016 Conference Presentation',
                    linkProps: {
                        href: 'http://bing.com',
                        target: '_blank'
                    },
                    previewImageSrc: TestImages_1.TestImages.documentPreview,
                    iconSrc: TestImages_1.TestImages.iconPpt,
                    imageFit: Image_1.ImageFit.cover,
                    width: 318,
                    height: 196
                },
                {
                    name: 'New Contoso Collaboration for Conference Presentation Draft',
                    linkProps: {
                        href: 'http://bing.com',
                        target: '_blank'
                    },
                    previewImageSrc: TestImages_1.TestImages.documentPreviewTwo,
                    iconSrc: TestImages_1.TestImages.iconPpt,
                    imageFit: Image_1.ImageFit.cover,
                    width: 318,
                    height: 196
                },
                {
                    name: 'Spec Sheet for design',
                    linkProps: {
                        href: 'http://bing.com',
                        target: '_blank'
                    },
                    previewImageSrc: TestImages_1.TestImages.documentPreviewThree,
                    iconSrc: TestImages_1.TestImages.iconPpt,
                    imageFit: Image_1.ImageFit.cover,
                    width: 318,
                    height: 196
                },
                {
                    name: 'Contoso Marketing Presentation',
                    linkProps: {
                        href: 'http://bing.com',
                        target: '_blank'
                    },
                    previewImageSrc: TestImages_1.TestImages.documentPreview,
                    iconSrc: TestImages_1.TestImages.iconPpt,
                    imageFit: Image_1.ImageFit.cover,
                    width: 318,
                    height: 196
                },
                {
                    name: 'Notes from Ignite conference',
                    linkProps: {
                        href: 'http://bing.com',
                        target: '_blank'
                    },
                    previewImageSrc: TestImages_1.TestImages.documentPreviewTwo,
                    iconSrc: TestImages_1.TestImages.iconPpt,
                    imageFit: Image_1.ImageFit.cover,
                    width: 318,
                    height: 196
                },
                {
                    name: 'FY17 Cost Projections',
                    linkProps: {
                        href: 'http://bing.com',
                        target: '_blank'
                    },
                    previewImageSrc: TestImages_1.TestImages.documentPreviewThree,
                    iconSrc: TestImages_1.TestImages.iconPpt,
                    imageFit: Image_1.ImageFit.cover,
                    width: 318,
                    height: 196
                }
            ]
        };
        return (React.createElement(DocumentCard_1.DocumentCard, { onClick: this._onClick },
            React.createElement(DocumentCard_1.DocumentCardPreview, tslib_1.__assign({}, previewProps)),
            React.createElement(DocumentCard_1.DocumentCardLocation, { location: "Marketing Documents", locationHref: "http://microsoft.com", ariaLabel: "Location, Marketing Documents" }),
            React.createElement(DocumentCard_1.DocumentCardTitle, { title: "6 files were uploaded" }),
            React.createElement(DocumentCard_1.DocumentCardActivity, { activity: "Created Feb 23, 2016", people: [{ name: 'Annie Lindqvist', profileImageSrc: TestImages_1.TestImages.personaFemale }] }),
            React.createElement(DocumentCard_1.DocumentCardActions, { actions: [
                    {
                        iconProps: { iconName: 'Share' },
                        onClick: this._onActionClick.bind(this, 'share'),
                        ariaLabel: 'share action'
                    },
                    {
                        iconProps: { iconName: 'Pin' },
                        onClick: this._onActionClick.bind(this, 'pin'),
                        ariaLabel: 'pin action'
                    },
                    {
                        iconProps: { iconName: 'Ringer' },
                        onClick: this._onActionClick.bind(this, 'notifications'),
                        ariaLabel: 'notifications action'
                    }
                ], views: 432 })));
    };
    DocumentCardCompleteExample.prototype._onActionClick = function (action, ev) {
        console.log("You clicked the " + action + " action");
        ev.stopPropagation();
        ev.preventDefault();
    };
    DocumentCardCompleteExample.prototype._onClick = function () {
        console.log('You clicked the card.');
    };
    return DocumentCardCompleteExample;
}(React.PureComponent));
exports.DocumentCardCompleteExample = DocumentCardCompleteExample;
//# sourceMappingURL=DocumentCard.Complete.Example.js.map