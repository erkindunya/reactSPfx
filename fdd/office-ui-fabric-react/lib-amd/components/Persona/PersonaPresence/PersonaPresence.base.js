define(["require", "exports", "tslib", "react", "../../../Utilities", "../../../Icon", "../Persona.types", "../PersonaConsts"], function (require, exports, tslib_1, React, Utilities_1, Icon_1, Persona_types_1, PersonaConsts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var coinSizeFontScaleFactor = 6;
    var coinSizePresenceScaleFactor = 3;
    var presenceMaxSize = 40;
    var presenceFontMaxSize = 20;
    var getClassNames = Utilities_1.classNamesFunction();
    /**
     * PersonaPresence with no default styles.
     * [Use the `getStyles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Styling)
     */
    var PersonaPresenceBase = /** @class */ (function (_super) {
        tslib_1.__extends(PersonaPresenceBase, _super);
        function PersonaPresenceBase(props) {
            var _this = _super.call(this, props) || this;
            _this._onRenderIcon = function (className, style) { return (React.createElement(Icon_1.Icon, { className: className, iconName: _this._determineIcon(), style: style })); };
            _this._determineIcon = function () {
                var presence = _this.props.presence;
                if (presence !== Persona_types_1.PersonaPresence.none) {
                    var userPresence = Persona_types_1.PersonaPresence[presence];
                    switch (userPresence) {
                        case 'online':
                            userPresence = 'SkypeCheck';
                            break;
                        case 'away':
                            userPresence = 'SkypeClock';
                            break;
                        case 'dnd':
                            userPresence = 'SkypeMinus';
                            break;
                        default:
                            userPresence = '';
                    }
                    return userPresence;
                }
            };
            return _this;
        }
        PersonaPresenceBase.prototype.render = function () {
            var _a = this.props, coinSize = _a.coinSize, styles = _a.styles, // Use getStyles from props.
            presence = _a.presence, theme = _a.theme;
            var size = PersonaConsts_1.sizeBoolean(this.props.size);
            // Render Presence Icon if Persona is above size 32.
            var renderIcon = !(size.isSize10 || size.isSize16 || size.isSize24 || size.isSize28 || size.isSize32) && (coinSize ? coinSize > 32 : true);
            var presenceHeightWidth = coinSize
                ? coinSize / coinSizePresenceScaleFactor < presenceMaxSize
                    ? coinSize / coinSizePresenceScaleFactor + 'px'
                    : presenceMaxSize + 'px'
                : '';
            var presenceFontSize = coinSize
                ? coinSize / coinSizeFontScaleFactor < presenceFontMaxSize
                    ? coinSize / coinSizeFontScaleFactor + 'px'
                    : presenceFontMaxSize + 'px'
                : '';
            var coinSizeWithPresenceIconStyle = coinSize ? { fontSize: presenceFontSize, lineHeight: presenceHeightWidth } : undefined;
            var coinSizeWithPresenceStyle = coinSize ? { width: presenceHeightWidth, height: presenceHeightWidth } : undefined;
            // Use getStyles from props, or fall back to getStyles from styles file.
            var classNames = getClassNames(styles, {
                theme: theme,
                presence: presence,
                size: this.props.size
            });
            if (presence === Persona_types_1.PersonaPresence.none) {
                return null;
            }
            return (React.createElement("div", { className: classNames.presence, style: coinSizeWithPresenceStyle }, renderIcon && this._onRenderIcon(classNames.presenceIcon, coinSizeWithPresenceIconStyle)));
        };
        return PersonaPresenceBase;
    }(Utilities_1.BaseComponent));
    exports.PersonaPresenceBase = PersonaPresenceBase;
});
//# sourceMappingURL=PersonaPresence.base.js.map