define(["require", "exports", "tslib", "react", "../../../../Utilities", "../../../../Persona", "../../../../ContextualMenu", "../../../../Button", "../../../../FocusZone", "./PickerItemsDefault.scss"], function (require, exports, tslib_1, React, Utilities_1, Persona_1, ContextualMenu_1, Button_1, FocusZone_1, stylesImport) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var styles = stylesImport;
    /**
     * PeoplePickerItem with an additional contextual menu.
     * @deprecated Do not use. Will be removed in Fabric 7.0
     */
    var SelectedItemWithMenu = /** @class */ (function (_super) {
        tslib_1.__extends(SelectedItemWithMenu, _super);
        function SelectedItemWithMenu(props) {
            var _this = _super.call(this, props) || this;
            _this._ellipsisRef = React.createRef();
            _this._onContextualMenu = function (ev) {
                _this.setState({ contextualMenuVisible: true });
            };
            _this._onCloseContextualMenu = function (ev) {
                _this.setState({ contextualMenuVisible: false });
            };
            _this.state = { contextualMenuVisible: false };
            return _this;
        }
        SelectedItemWithMenu.prototype.render = function () {
            var _a = this.props, item = _a.item, onRemoveItem = _a.onRemoveItem, removeButtonAriaLabel = _a.removeButtonAriaLabel;
            return (React.createElement("div", { "data-is-focusable": true, className: Utilities_1.css('ms-PickerItem-container', styles.itemContainer) },
                React.createElement(FocusZone_1.FocusZone, { className: Utilities_1.css('ms-PickerPersona-container', styles.personaContainer) },
                    React.createElement("div", { className: Utilities_1.css('ms-PickerItem-content', styles.itemContent) },
                        React.createElement(Persona_1.Persona, tslib_1.__assign({}, item, { presence: item.presence !== undefined ? item.presence : Persona_1.PersonaPresence.none }))),
                    React.createElement("div", { ref: this._ellipsisRef, className: Utilities_1.css('ms-PickerItem-content', styles.itemContent) },
                        React.createElement(Button_1.IconButton, { iconProps: { iconName: 'More' }, onClick: this._onContextualMenu })),
                    React.createElement("div", { className: Utilities_1.css('ms-PickerItem-content', styles.itemContent) },
                        React.createElement(Button_1.IconButton, { iconProps: { iconName: 'Cancel' }, onClick: onRemoveItem, ariaLabel: removeButtonAriaLabel })),
                    this.state.contextualMenuVisible ? (React.createElement(ContextualMenu_1.ContextualMenu, { items: item.menuItems, shouldFocusOnMount: true, target: this._ellipsisRef.current, onDismiss: this._onCloseContextualMenu, directionalHint: ContextualMenu_1.DirectionalHint.bottomAutoEdge })) : null)));
        };
        return SelectedItemWithMenu;
    }(Utilities_1.BaseComponent));
    exports.SelectedItemWithMenu = SelectedItemWithMenu;
});
//# sourceMappingURL=SelectedItemWithMenu.js.map