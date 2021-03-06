"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var TextField_1 = require("../TextField");
var Utilities_1 = require("../../../Utilities");
var inputMask_1 = require("./inputMask");
exports.DEFAULT_MASK_CHAR = '_';
var MaskedTextField = /** @class */ (function (_super) {
    tslib_1.__extends(MaskedTextField, _super);
    function MaskedTextField(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._skipComponentRefResolution = true;
        _this._textField = React.createRef();
        Utilities_1.initializeComponentRef(_this);
        // Translate mask into charData
        _this._maskCharData = inputMask_1.parseMask(props.mask, props.maskFormat);
        // If an initial value is provided, use it to populate the format chars
        props.value !== undefined && _this.setValue(props.value);
        _this._isFocused = false;
        _this._moveCursorOnMouseUp = false;
        _this.state = {
            displayValue: inputMask_1.getMaskDisplay(props.mask, _this._maskCharData, props.maskChar)
        };
        return _this;
    }
    MaskedTextField.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps.mask !== this.props.mask || newProps.value !== this.props.value) {
            this._maskCharData = inputMask_1.parseMask(newProps.mask, newProps.maskFormat);
            newProps.value !== undefined && this.setValue(newProps.value);
            this.setState({
                displayValue: inputMask_1.getMaskDisplay(newProps.mask, this._maskCharData, newProps.maskChar)
            });
        }
    };
    MaskedTextField.prototype.componentDidUpdate = function () {
        // Move the cursor to the start of the mask format on update
        if (this.state.maskCursorPosition !== undefined && this._textField.current) {
            this._textField.current.setSelectionRange(this.state.maskCursorPosition, this.state.maskCursorPosition);
        }
    };
    MaskedTextField.prototype.render = function () {
        return (React.createElement(TextField_1.TextField, tslib_1.__assign({}, this.props, { onFocus: this._onFocus, onBlur: this._onBlur, onMouseDown: this._onMouseDown, onMouseUp: this._onMouseUp, onChange: this._onInputChange, onBeforeChange: this._onBeforeChange, onKeyDown: this._onKeyDown, onPaste: this._onPaste, value: this.state.displayValue, componentRef: this._textField })));
    };
    Object.defineProperty(MaskedTextField.prototype, "value", {
        /**
         * @returns The value of all filled format characters or undefined if not all format characters are filled
         */
        get: function () {
            var value = '';
            for (var i = 0; i < this._maskCharData.length; i++) {
                if (!this._maskCharData[i].value) {
                    return undefined;
                }
                value += this._maskCharData[i].value;
            }
            return value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     */
    MaskedTextField.prototype.setValue = function (newValue) {
        var valueIndex = 0, charDataIndex = 0;
        while (valueIndex < newValue.length && charDataIndex < this._maskCharData.length) {
            // Test if the next character in the new value fits the next format character
            var testVal = newValue[valueIndex];
            if (this._maskCharData[charDataIndex].format.test(testVal)) {
                this._maskCharData[charDataIndex].value = testVal;
                charDataIndex++;
            }
            valueIndex++;
        }
    };
    MaskedTextField.prototype.focus = function () {
        var current = this._textField.current;
        current && current.focus();
    };
    MaskedTextField.prototype.blur = function () {
        var current = this._textField.current;
        current && current.blur();
    };
    MaskedTextField.prototype.select = function () {
        var current = this._textField.current;
        current && current.select();
    };
    MaskedTextField.prototype.setSelectionStart = function (value) {
        var current = this._textField.current;
        current && current.setSelectionStart(value);
    };
    MaskedTextField.prototype.setSelectionEnd = function (value) {
        var current = this._textField.current;
        current && current.setSelectionEnd(value);
    };
    MaskedTextField.prototype.setSelectionRange = function (start, end) {
        var current = this._textField.current;
        current && current.setSelectionRange(start, end);
    };
    Object.defineProperty(MaskedTextField.prototype, "selectionStart", {
        get: function () {
            var current = this._textField.current;
            return current && current.selectionStart !== null ? current.selectionStart : -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextField.prototype, "selectionEnd", {
        get: function () {
            var current = this._textField.current;
            return current && current.selectionEnd ? current.selectionEnd : -1;
        },
        enumerable: true,
        configurable: true
    });
    MaskedTextField.prototype._onFocus = function (event) {
        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
        this._isFocused = true;
        // Move the cursor position to the leftmost unfilled position
        for (var i = 0; i < this._maskCharData.length; i++) {
            if (!this._maskCharData[i].value) {
                this.setState({
                    maskCursorPosition: this._maskCharData[i].displayIndex
                });
                break;
            }
        }
    };
    MaskedTextField.prototype._onBlur = function (event) {
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
        this._isFocused = false;
        this._moveCursorOnMouseUp = true;
    };
    MaskedTextField.prototype._onMouseDown = function (event) {
        if (this.props.onMouseDown) {
            this.props.onMouseDown(event);
        }
        if (!this._isFocused) {
            this._moveCursorOnMouseUp = true;
        }
    };
    MaskedTextField.prototype._onMouseUp = function (event) {
        if (this.props.onMouseUp) {
            this.props.onMouseUp(event);
        }
        // Move the cursor on mouseUp after focusing the textField
        if (this._moveCursorOnMouseUp) {
            this._moveCursorOnMouseUp = false;
            // Move the cursor position to the rightmost unfilled position
            for (var i = 0; i < this._maskCharData.length; i++) {
                if (!this._maskCharData[i].value) {
                    this.setState({
                        maskCursorPosition: this._maskCharData[i].displayIndex
                    });
                    break;
                }
            }
        }
    };
    MaskedTextField.prototype._onBeforeChange = function (value) {
        var current = this._textField.current;
        if (this.props.onBeforeChange) {
            this.props.onBeforeChange(value);
        }
        if (this._changeSelectionData === null && current) {
            this._changeSelectionData = {
                changeType: 'default',
                selectionStart: current.selectionStart !== null ? current.selectionStart : -1,
                selectionEnd: current.selectionEnd !== null ? current.selectionEnd : -1
            };
        }
    };
    MaskedTextField.prototype._onInputChange = function (ev, value) {
        if (!this._changeSelectionData) {
            return;
        }
        var displayValue = this.state.displayValue;
        // The initial value of cursorPos does not matter
        var cursorPos = 0;
        var _a = this._changeSelectionData, changeType = _a.changeType, selectionStart = _a.selectionStart, selectionEnd = _a.selectionEnd;
        if (changeType === 'textPasted') {
            var charsSelected = selectionEnd - selectionStart, charCount = value.length + charsSelected - displayValue.length, startPos = selectionStart, pastedString = value.substr(startPos, charCount);
            // Clear any selected characters
            if (charsSelected) {
                this._maskCharData = inputMask_1.clearRange(this._maskCharData, selectionStart, charsSelected);
            }
            cursorPos = inputMask_1.insertString(this._maskCharData, startPos, pastedString);
        }
        else if (changeType === 'delete' || changeType === 'backspace') {
            // isDel is true If the characters are removed LTR, otherwise RTL
            var isDel = changeType === 'delete', charCount = selectionEnd - selectionStart;
            if (charCount) {
                // charCount is > 0 if range was deleted
                this._maskCharData = inputMask_1.clearRange(this._maskCharData, selectionStart, charCount);
                cursorPos = inputMask_1.getRightFormatIndex(this._maskCharData, selectionStart);
            }
            else {
                // If charCount === 0, there was no selection and a single character was deleted
                if (isDel) {
                    this._maskCharData = inputMask_1.clearNext(this._maskCharData, selectionStart);
                    cursorPos = inputMask_1.getRightFormatIndex(this._maskCharData, selectionStart);
                }
                else {
                    this._maskCharData = inputMask_1.clearPrev(this._maskCharData, selectionStart);
                    cursorPos = inputMask_1.getLeftFormatIndex(this._maskCharData, selectionStart);
                }
            }
        }
        else if (value.length > displayValue.length) {
            // This case is if the user added characters
            var charCount = value.length - displayValue.length, startPos = selectionEnd - charCount, enteredString = value.substr(startPos, charCount);
            cursorPos = inputMask_1.insertString(this._maskCharData, startPos, enteredString);
        }
        else if (value.length <= displayValue.length) {
            /**
             * This case is reached only if the user has selected a block of 1 or more
             * characters and input a character replacing the characters they've selected.
             */
            var charCount = 1, selectCount = displayValue.length + charCount - value.length, startPos = selectionEnd - charCount, enteredString = value.substr(startPos, charCount);
            // Clear the selected range
            this._maskCharData = inputMask_1.clearRange(this._maskCharData, startPos, selectCount);
            // Insert the printed character
            cursorPos = inputMask_1.insertString(this._maskCharData, startPos, enteredString);
        }
        this._changeSelectionData = null;
        var newValue = inputMask_1.getMaskDisplay(this.props.mask, this._maskCharData, this.props.maskChar);
        this.setState({
            displayValue: newValue,
            maskCursorPosition: cursorPos
        });
        // Perform onChange/d after input has been processed. Return value is expected to be the displayed text
        if (this.props.onChange) {
            this.props.onChange(ev, newValue);
        }
        if (this.props.onChanged) {
            this.props.onChanged(newValue);
        }
    };
    MaskedTextField.prototype._onKeyDown = function (event) {
        var current = this._textField.current;
        if (this.props.onKeyDown) {
            this.props.onKeyDown(event);
        }
        this._changeSelectionData = null;
        if (current && current.value) {
            var keyCode = event.keyCode, ctrlKey = event.ctrlKey, metaKey = event.metaKey;
            // Ignore ctrl and meta keydown
            if (ctrlKey || metaKey) {
                return;
            }
            // On backspace or delete, store the selection and the keyCode
            if (keyCode === Utilities_1.KeyCodes.backspace || keyCode === Utilities_1.KeyCodes.del) {
                var selectionStart = event.target.selectionStart, selectionEnd = event.target.selectionEnd;
                // Check if backspace or delete press is valid.
                if (!(keyCode === Utilities_1.KeyCodes.backspace && selectionEnd && selectionEnd > 0) &&
                    !(keyCode === Utilities_1.KeyCodes.del && selectionStart !== null && selectionStart < current.value.length)) {
                    return;
                }
                this._changeSelectionData = {
                    changeType: keyCode === Utilities_1.KeyCodes.backspace ? 'backspace' : 'delete',
                    selectionStart: selectionStart !== null ? selectionStart : -1,
                    selectionEnd: selectionEnd !== null ? selectionEnd : -1
                };
            }
        }
    };
    MaskedTextField.prototype._onPaste = function (event) {
        if (this.props.onPaste) {
            this.props.onPaste(event);
        }
        var selectionStart = event.target.selectionStart, selectionEnd = event.target.selectionEnd;
        // Store the paste selection range
        this._changeSelectionData = {
            changeType: 'textPasted',
            selectionStart: selectionStart !== null ? selectionStart : -1,
            selectionEnd: selectionEnd !== null ? selectionEnd : -1
        };
    };
    MaskedTextField.defaultProps = {
        maskChar: exports.DEFAULT_MASK_CHAR,
        maskFormat: inputMask_1.DEFAULT_MASK_FORMAT_CHARS
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], MaskedTextField.prototype, "_onFocus", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], MaskedTextField.prototype, "_onBlur", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], MaskedTextField.prototype, "_onMouseDown", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], MaskedTextField.prototype, "_onMouseUp", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], MaskedTextField.prototype, "_onBeforeChange", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], MaskedTextField.prototype, "_onInputChange", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], MaskedTextField.prototype, "_onKeyDown", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], MaskedTextField.prototype, "_onPaste", null);
    return MaskedTextField;
}(React.Component));
exports.MaskedTextField = MaskedTextField;
//# sourceMappingURL=MaskedTextField.js.map