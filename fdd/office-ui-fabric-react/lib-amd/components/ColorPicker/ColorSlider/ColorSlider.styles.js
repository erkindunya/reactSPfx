define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getStyles = function (props) {
        var theme = props.theme, className = props.className;
        var palette = theme.palette;
        return {
            root: [
                'ms-ColorPicker-slider',
                {
                    position: 'relative',
                    height: 20,
                    marginBottom: 5,
                    border: "1px solid " + palette.neutralLight,
                    boxSizing: 'border-box'
                },
                className
            ],
            sliderOverlay: [
                'ms-ColorPicker-sliderOverlay',
                {
                    content: '',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            ],
            sliderThumb: [
                'ms-ColorPicker-thumb',
                'is-slider',
                {
                    position: 'absolute',
                    width: 20,
                    height: 20,
                    background: 'white',
                    border: '1px solid rgba(255,255,255,.8)',
                    borderRadius: '50%',
                    boxShadow: '0 0 15px -5px black',
                    transform: 'translate(-50%, -50%)',
                    top: '50%'
                }
            ]
        };
    };
});
//# sourceMappingURL=ColorSlider.styles.js.map