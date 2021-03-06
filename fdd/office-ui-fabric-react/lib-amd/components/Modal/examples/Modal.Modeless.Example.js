define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Modal", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Utilities", "./Modal.Example.scss", "office-ui-fabric-react/lib/Checkbox", "office-ui-fabric-react/lib/ContextualMenu"], function (require, exports, tslib_1, React, Modal_1, Button_1, Utilities_1, styles, Checkbox_1, ContextualMenu_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ModalModelessExample = /** @class */ (function (_super) {
        tslib_1.__extends(ModalModelessExample, _super);
        function ModalModelessExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                showModal: false,
                isDraggable: false
            };
            // Use getId() to ensure that the IDs are unique on the page.
            // (It's also okay to use plain strings without getId() and manually ensure uniqueness.)
            _this._titleId = Utilities_1.getId('title');
            _this._subtitleId = Utilities_1.getId('subText');
            _this._dragOptions = {
                moveMenuItemText: 'Move',
                closeMenuItemText: 'Close',
                menu: ContextualMenu_1.ContextualMenu
            };
            _this._showModal = function () {
                _this.setState({ showModal: true });
            };
            _this._closeModal = function () {
                _this.setState({ showModal: false });
            };
            _this._toggleDraggable = function () {
                _this.setState({ isDraggable: !_this.state.isDraggable });
            };
            return _this;
        }
        ModalModelessExample.prototype.render = function () {
            var _a = this.state, showModal = _a.showModal, isDraggable = _a.isDraggable;
            return (React.createElement("div", null,
                React.createElement(Checkbox_1.Checkbox, { label: "Is draggable", onChange: this._toggleDraggable, checked: isDraggable, disabled: showModal }),
                React.createElement(Button_1.DefaultButton, { secondaryText: "Opens the Sample Modal", onClick: this._showModal, text: "Open Modal" }),
                React.createElement(Modal_1.Modal, { titleAriaId: this._titleId, subtitleAriaId: this._subtitleId, isOpen: showModal, onDismiss: this._closeModal, isModeless: true, containerClassName: styles.stickyContainer, dragOptions: isDraggable ? this._dragOptions : undefined },
                    React.createElement("div", { className: styles.header },
                        React.createElement("span", { id: this._titleId }, "Lorem Ipsum")),
                    React.createElement("div", { id: this._subtitleId, className: styles.body },
                        React.createElement(Button_1.DefaultButton, { onClick: this._closeModal, text: "Close" }),
                        React.createElement("p", null,
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem nulla, malesuada ut sagittis sit amet, vulputate in leo. Maecenas vulputate congue sapien eu tincidunt. Etiam eu sem turpis. Fusce tempor sagittis nunc, ut interdum ipsum vestibulum non. Proin dolor elit, aliquam eget tincidunt non, vestibulum ut turpis. In hac habitasse platea dictumst. In a odio eget enim porttitor maximus. Aliquam nulla nibh, ullamcorper aliquam placerat eu, viverra et dui. Phasellus ex lectus, maximus in mollis ac, luctus vel eros. Vivamus ultrices, turpis sed malesuada gravida, eros ipsum venenatis elit, et volutpat eros dui et ante. Quisque ultricies mi nec leo ultricies mollis. Vivamus egestas volutpat lacinia. Quisque pharetra eleifend efficitur.",
                            ' ')))));
        };
        return ModalModelessExample;
    }(React.Component));
    exports.ModalModelessExample = ModalModelessExample;
});
//# sourceMappingURL=Modal.Modeless.Example.js.map