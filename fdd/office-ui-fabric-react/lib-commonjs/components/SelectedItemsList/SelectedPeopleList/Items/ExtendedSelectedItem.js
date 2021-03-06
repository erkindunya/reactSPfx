"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/* tslint:disable */
var React = require("react");
/* tslint:enable */
var Utilities_1 = require("../../../../Utilities");
var Persona_1 = require("../../../../Persona");
var Button_1 = require("../../../../Button");
var stylesImport = require("./ExtendedSelectedItem.scss");
// tslint:disable-next-line:no-any
var styles = stylesImport;
var ExtendedSelectedItem = /** @class */ (function (_super) {
    tslib_1.__extends(ExtendedSelectedItem, _super);
    function ExtendedSelectedItem(props) {
        var _this = _super.call(this, props) || this;
        _this.persona = React.createRef();
        _this.state = { contextualMenuVisible: false };
        return _this;
    }
    ExtendedSelectedItem.prototype.render = function () {
        var _a = this.props, item = _a.item, onExpandItem = _a.onExpandItem, onRemoveItem = _a.onRemoveItem, removeButtonAriaLabel = _a.removeButtonAriaLabel, index = _a.index, selected = _a.selected;
        var itemId = Utilities_1.getId();
        return (React.createElement("div", { ref: this.persona, className: Utilities_1.css('ms-PickerPersona-container', styles.personaContainer, (_b = {}, _b['is-selected ' + styles.personaContainerIsSelected] = selected, _b), (_c = {}, _c['is-invalid ' + styles.validationError] = !item.isValid, _c)), "data-is-focusable": true, "data-is-sub-focuszone": true, "data-selection-index": index, role: 'listitem', "aria-labelledby": 'selectedItemPersona-' + itemId },
            React.createElement("div", { hidden: !item.canExpand || onExpandItem === undefined },
                React.createElement(Button_1.IconButton, { onClick: this._onClickIconButton(onExpandItem), iconProps: { iconName: 'Add', style: { fontSize: '14px' } }, className: Utilities_1.css('ms-PickerItem-removeButton', styles.expandButton, styles.actionButton), ariaLabel: removeButtonAriaLabel })),
            React.createElement("div", { className: Utilities_1.css(styles.personaWrapper) },
                React.createElement("div", { className: Utilities_1.css('ms-PickerItem-content', styles.itemContent), id: 'selectedItemPersona-' + itemId },
                    React.createElement(Persona_1.Persona, tslib_1.__assign({}, item, { onRenderCoin: this.props.renderPersonaCoin, onRenderPrimaryText: this.props.renderPrimaryText, size: Persona_1.PersonaSize.size32 }))),
                React.createElement(Button_1.IconButton, { onClick: this._onClickIconButton(onRemoveItem), iconProps: { iconName: 'Cancel', style: { fontSize: '14px' } }, className: Utilities_1.css('ms-PickerItem-removeButton', styles.removeButton, styles.actionButton), ariaLabel: removeButtonAriaLabel }))));
        var _b, _c;
    };
    ExtendedSelectedItem.prototype._onClickIconButton = function (action) {
        return function (ev) {
            ev.stopPropagation();
            ev.preventDefault();
            if (action) {
                action();
            }
        };
    };
    return ExtendedSelectedItem;
}(Utilities_1.BaseComponent));
exports.ExtendedSelectedItem = ExtendedSelectedItem;
//# sourceMappingURL=ExtendedSelectedItem.js.map