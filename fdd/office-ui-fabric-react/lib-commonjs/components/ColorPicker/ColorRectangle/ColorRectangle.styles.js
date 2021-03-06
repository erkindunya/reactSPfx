"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = require("../../../Styling");
exports.getStyles = function (props) {
    var className = props.className;
    return {
        root: [
            'ms-ColorPicker-colorRect',
            {
                position: 'relative',
                marginBottom: 10,
                selectors: (_a = {},
                    _a[Styling_1.HighContrastSelector] = {
                        MsHighContrastAdjust: 'none'
                    },
                    _a)
            },
            className
        ],
        light: [
            'ms-ColorPicker-light',
            {
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                background: 'linear-gradient(to right, white 0%, transparent 100%)'
            }
        ],
        dark: [
            'ms-ColorPicker-dark',
            {
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, transparent 0, #000 100%)'
            }
        ],
        thumb: [
            'ms-ColorPicker-thumb',
            {
                position: 'absolute',
                width: 20,
                height: 20,
                background: 'white',
                border: '1px solid rgba(255,255,255,.8)',
                borderRadius: '50%',
                boxShadow: '0 0 15px -5px black',
                transform: 'translate(-50%, -50%)'
            }
        ]
    };
    var _a;
};
//# sourceMappingURL=ColorRectangle.styles.js.map