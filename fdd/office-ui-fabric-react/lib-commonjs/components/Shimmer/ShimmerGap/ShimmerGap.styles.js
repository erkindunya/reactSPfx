"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = require("../../../Styling");
var GlobalClassNames = {
    root: 'ms-ShimmerGap-root'
};
function getStyles(props) {
    var height = props.height, borderStyle = props.borderStyle, theme = props.theme;
    var palette = theme.palette;
    var globalClassNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
    var borderStyles = !!borderStyle ? borderStyle : {};
    return {
        root: [
            globalClassNames.root,
            theme.fonts.medium,
            {
                backgroundColor: palette.white,
                height: height + "px",
                boxSizing: 'content-box',
                borderTopStyle: 'solid',
                borderBottomStyle: 'solid',
                borderColor: palette.white,
                selectors: (_a = {},
                    _a[Styling_1.HighContrastSelector] = {
                        backgroundColor: 'Window',
                        borderColor: 'Window'
                    },
                    _a)
            },
            borderStyles
        ]
    };
    var _a;
}
exports.getStyles = getStyles;
//# sourceMappingURL=ShimmerGap.styles.js.map