define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Facepile", "./FacepileExampleData"], function (require, exports, tslib_1, React, Facepile_1, FacepileExampleData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FacepileAddFaceExample = /** @class */ (function (_super) {
        tslib_1.__extends(FacepileAddFaceExample, _super);
        function FacepileAddFaceExample(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                numberOfFaces: 0
            };
            return _this;
        }
        FacepileAddFaceExample.prototype.render = function () {
            var _this = this;
            var numberOfFaces = this.state.numberOfFaces;
            var facepileProps = {
                personas: FacepileExampleData_1.facepilePersonas.slice(0, numberOfFaces),
                maxDisplayablePersonas: 5,
                overflowButtonProps: {
                    ariaLabel: 'More users',
                    onClick: function (ev) { return alert('overflow icon clicked'); }
                },
                overflowButtonType: Facepile_1.OverflowButtonType.descriptive,
                showAddButton: true,
                addButtonProps: {
                    ariaLabel: 'Add a new person',
                    onClick: function (ev) {
                        return _this.setState({
                            numberOfFaces: _this.state.numberOfFaces + 1
                        });
                    }
                },
                ariaDescription: 'To move through the items use left and right arrow keys.'
            };
            return React.createElement(Facepile_1.Facepile, tslib_1.__assign({}, facepileProps));
        };
        return FacepileAddFaceExample;
    }(React.Component));
    exports.FacepileAddFaceExample = FacepileAddFaceExample;
});
//# sourceMappingURL=Facepile.AddFace.Example.js.map