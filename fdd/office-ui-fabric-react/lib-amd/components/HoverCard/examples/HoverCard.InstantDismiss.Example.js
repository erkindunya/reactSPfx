define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/HoverCard", "office-ui-fabric-react/lib/Fabric", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Styling"], function (require, exports, tslib_1, React, HoverCard_1, Fabric_1, Button_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var classNames = Styling_1.mergeStyleSets({
        plainCard: {
            width: 200,
            height: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        target: {
            fontWeight: '600',
            display: 'inline-block',
            border: '1px dashed #605e5c',
            padding: 5,
            borderRadius: 2
        }
    });
    var HoverCardInstantDismissExample = /** @class */ (function (_super) {
        tslib_1.__extends(HoverCardInstantDismissExample, _super);
        function HoverCardInstantDismissExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._hoverCard = React.createRef();
            _this._onRenderPlainCard = function () {
                return (React.createElement("div", { className: classNames.plainCard },
                    React.createElement(Button_1.DefaultButton, { onClick: _this._instantDismissCard, text: "Instant Dismiss" })));
            };
            _this._instantDismissCard = function () {
                if (_this._hoverCard.current) {
                    _this._hoverCard.current.dismiss();
                }
            };
            _this._onCardHide = function () {
                console.log('I am now hidden');
            };
            return _this;
        }
        HoverCardInstantDismissExample.prototype.render = function () {
            var plainCardProps = {
                onRenderPlainCard: this._onRenderPlainCard
            };
            return (React.createElement(Fabric_1.Fabric, null,
                React.createElement("p", null,
                    "In cases where an instant dismiss of the card is needed, public method ",
                    React.createElement("i", null, "dismiss()"),
                    " can be used through its",
                    ' ',
                    React.createElement("i", null, "componentRef"),
                    " prop."),
                React.createElement(HoverCard_1.HoverCard, { cardDismissDelay: 2000, type: HoverCard_1.HoverCardType.plain, plainCardProps: plainCardProps, componentRef: this._hoverCard, onCardHide: this._onCardHide },
                    React.createElement("span", { className: classNames.target }, "Hover Over Me"))));
        };
        return HoverCardInstantDismissExample;
    }(React.Component));
    exports.HoverCardInstantDismissExample = HoverCardInstantDismissExample;
});
//# sourceMappingURL=HoverCard.InstantDismiss.Example.js.map