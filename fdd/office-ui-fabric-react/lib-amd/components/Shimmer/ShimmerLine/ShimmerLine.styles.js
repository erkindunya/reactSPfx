define(["require", "exports", "../../../Styling"], function (require, exports, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalClassNames = {
        root: 'ms-ShimmerLine-root',
        topLeftCorner: 'ms-ShimmerLine-topLeftCorner',
        topRightCorner: 'ms-ShimmerLine-topRightCorner',
        bottomLeftCorner: 'ms-ShimmerLine-bottomLeftCorner',
        bottomRightCorner: 'ms-ShimmerLine-bottomRightCorner'
    };
    function getStyles(props) {
        var height = props.height, borderStyle = props.borderStyle, theme = props.theme;
        var palette = theme.palette;
        var globalClassNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
        var borderStyles = !!borderStyle ? borderStyle : {};
        var sharedCornerStyles = {
            position: 'absolute',
            fill: palette.white
        };
        return {
            root: [
                globalClassNames.root,
                theme.fonts.medium,
                {
                    height: height + "px",
                    boxSizing: 'content-box',
                    position: 'relative',
                    borderTopStyle: 'solid',
                    borderBottomStyle: 'solid',
                    borderColor: palette.white,
                    selectors: (_a = {},
                        _a[Styling_1.HighContrastSelector] = {
                            borderColor: 'Window',
                            selectors: {
                                '> *': {
                                    fill: 'Window'
                                }
                            }
                        },
                        _a)
                },
                borderStyles
            ],
            topLeftCorner: [
                globalClassNames.topLeftCorner,
                {
                    top: '0',
                    left: '0'
                },
                sharedCornerStyles
            ],
            topRightCorner: [
                globalClassNames.topRightCorner,
                {
                    top: '0',
                    right: '0'
                },
                sharedCornerStyles
            ],
            bottomRightCorner: [
                globalClassNames.bottomRightCorner,
                {
                    bottom: '0',
                    right: '0'
                },
                sharedCornerStyles
            ],
            bottomLeftCorner: [
                globalClassNames.bottomLeftCorner,
                {
                    bottom: '0',
                    left: '0'
                },
                sharedCornerStyles
            ]
        };
        var _a;
    }
    exports.getStyles = getStyles;
});
//# sourceMappingURL=ShimmerLine.styles.js.map