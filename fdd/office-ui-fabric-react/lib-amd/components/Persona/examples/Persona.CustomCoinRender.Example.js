define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Persona", "../../../common/TestImages", "../../../common/_exampleStyles.scss", "./PersonaExample.scss"], function (require, exports, tslib_1, React, Persona_1, TestImages_1, exampleStylesImport) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var exampleStyles = exampleStylesImport;
    var examplePersona = {
        imageInitials: 'TR',
        text: 'Ted Randall',
        secondaryText: 'Project Manager',
        optionalText: 'Available at 4:00pm'
    };
    var PersonaCustomCoinRenderExample = /** @class */ (function (_super) {
        tslib_1.__extends(PersonaCustomCoinRenderExample, _super);
        function PersonaCustomCoinRenderExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._onRenderCoin = function (props) {
                var coinSize = props.coinSize, imageAlt = props.imageAlt, imageUrl = props.imageUrl;
                return (React.createElement("div", { className: "customExampleCoin" },
                    React.createElement("img", { src: imageUrl, alt: imageAlt, width: coinSize, height: coinSize })));
            };
            return _this;
        }
        PersonaCustomCoinRenderExample.prototype.render = function () {
            return (React.createElement("div", { className: "ms-PersonaExample" },
                React.createElement("div", { className: exampleStyles.exampleLabel }, "Custom functional element in place of persona coin's image"),
                React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size72, presence: Persona_1.PersonaPresence.online, onRenderCoin: this._onRenderCoin, imageAlt: 'Custom Coin Image', imageUrl: TestImages_1.TestImages.personaMale, coinSize: 72 }))));
        };
        return PersonaCustomCoinRenderExample;
    }(React.Component));
    exports.PersonaCustomCoinRenderExample = PersonaCustomCoinRenderExample;
});
//# sourceMappingURL=Persona.CustomCoinRender.Example.js.map