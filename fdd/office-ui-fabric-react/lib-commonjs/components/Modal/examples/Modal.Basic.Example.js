"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Modal_1 = require("office-ui-fabric-react/lib/Modal");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var styles = require("./Modal.Example.scss");
var Checkbox_1 = require("office-ui-fabric-react/lib/Checkbox");
var ContextualMenu_1 = require("office-ui-fabric-react/lib/ContextualMenu");
var ModalBasicExample = /** @class */ (function (_super) {
    tslib_1.__extends(ModalBasicExample, _super);
    function ModalBasicExample() {
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
    ModalBasicExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Checkbox_1.Checkbox, { label: "Is draggable", onChange: this._toggleDraggable, checked: this.state.isDraggable }),
            React.createElement(Button_1.DefaultButton, { secondaryText: "Opens the Sample Modal", onClick: this._showModal, text: "Open Modal" }),
            React.createElement(Modal_1.Modal, { titleAriaId: this._titleId, subtitleAriaId: this._subtitleId, isOpen: this.state.showModal, onDismiss: this._closeModal, isBlocking: false, containerClassName: styles.container, dragOptions: this.state.isDraggable ? this._dragOptions : undefined },
                React.createElement("div", { className: styles.header },
                    React.createElement("span", { id: this._titleId }, "Lorem Ipsum")),
                React.createElement("div", { id: this._subtitleId, className: styles.body },
                    React.createElement(Button_1.DefaultButton, { onClick: this._closeModal, text: "Close" }),
                    React.createElement("p", null,
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem nulla, malesuada ut sagittis sit amet, vulputate in leo. Maecenas vulputate congue sapien eu tincidunt. Etiam eu sem turpis. Fusce tempor sagittis nunc, ut interdum ipsum vestibulum non. Proin dolor elit, aliquam eget tincidunt non, vestibulum ut turpis. In hac habitasse platea dictumst. In a odio eget enim porttitor maximus. Aliquam nulla nibh, ullamcorper aliquam placerat eu, viverra et dui. Phasellus ex lectus, maximus in mollis ac, luctus vel eros. Vivamus ultrices, turpis sed malesuada gravida, eros ipsum venenatis elit, et volutpat eros dui et ante. Quisque ultricies mi nec leo ultricies mollis. Vivamus egestas volutpat lacinia. Quisque pharetra eleifend efficitur.",
                        ' '),
                    React.createElement("p", null,
                        "Mauris at nunc eget lectus lobortis facilisis et eget magna. Vestibulum venenatis augue sapien, rhoncus faucibus magna semper eget. Proin rutrum libero sagittis sapien aliquet auctor. Suspendisse tristique a magna at facilisis. Duis rhoncus feugiat magna in rutrum. Suspendisse semper, dolor et vestibulum lacinia, nunc felis malesuada ex, nec hendrerit justo ex et massa. Quisque quis mollis nulla. Nam commodo est ornare, rhoncus odio eu, pharetra tellus. Nunc sed velit mi.",
                        ' '),
                    React.createElement("p", null,
                        "Sed condimentum ultricies turpis convallis pharetra. Sed sagittis quam pharetra luctus porttitor. Cras vel consequat lectus. Sed nec fringilla urna, a aliquet libero. Aenean sed nisl purus. Vivamus vulputate felis et odio efficitur suscipit. Ut volutpat dictum lectus, ac rutrum massa accumsan at. Sed pharetra auctor finibus. In augue libero, commodo vitae nisi non, sagittis convallis ante. Phasellus malesuada eleifend mollis. Curabitur ultricies leo ac metus venenatis elementum.",
                        ' '),
                    React.createElement("p", null,
                        "Aenean egestas quam ut erat commodo blandit. Mauris ante nisl, pellentesque sed venenatis nec, aliquet sit amet enim. Praesent vitae diam non diam aliquet tristique non ut arcu. Pellentesque et ultrices eros. Fusce diam metus, mattis eu luctus nec, facilisis vel erat. Nam a lacus quis tellus gravida euismod. Nulla sed sem eget tortor cursus interdum. Sed vehicula tristique ultricies. Aenean libero purus, mollis quis massa quis, eleifend dictum massa. Fusce eu sapien sit amet odio lacinia placerat. Mauris varius risus sed aliquet cursus. Aenean lectus magna, tincidunt sit amet sodales a, volutpat ac leo. Morbi nisl sapien, tincidunt sit amet mauris quis, sollicitudin auctor est.",
                        ' '),
                    React.createElement("p", null, "Nam id mi justo. Nam vehicula vulputate augue, ac pretium enim rutrum ultricies. Sed aliquet accumsan varius. Quisque ac auctor ligula. Fusce fringilla, odio et dignissim iaculis, est lacus ultrices risus, vitae condimentum enim urna eu nunc. In risus est, mattis non suscipit at, mattis ut ante. Maecenas consectetur urna vel erat maximus, non molestie massa consequat. Duis a feugiat nibh. Sed a hendrerit diam, a mattis est. In augue dolor, faucibus vel metus at, convallis rhoncus dui.")))));
    };
    return ModalBasicExample;
}(React.Component));
exports.ModalBasicExample = ModalBasicExample;
//# sourceMappingURL=Modal.Basic.Example.js.map