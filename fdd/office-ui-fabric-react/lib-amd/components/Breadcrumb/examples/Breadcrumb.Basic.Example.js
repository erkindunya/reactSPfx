define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Breadcrumb", "office-ui-fabric-react/lib/Label", "../../../common/_exampleStyles.scss", "office-ui-fabric-react/lib/Tooltip"], function (require, exports, tslib_1, React, Breadcrumb_1, Label_1, exampleStylesImport, Tooltip_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var exampleStyles = exampleStylesImport;
    var BreadcrumbBasicExample = /** @class */ (function (_super) {
        tslib_1.__extends(BreadcrumbBasicExample, _super);
        function BreadcrumbBasicExample(props) {
            var _this = _super.call(this, props) || this;
            _this._onBreadcrumbItemClicked = function (ev, item) {
                console.log("Breadcrumb item with key \"" + item.key + "\" has been clicked.");
            };
            _this._getCustomDivider = function (dividerProps) {
                var tooltipText = dividerProps.item ? dividerProps.item.text : '';
                return (React.createElement(Tooltip_1.TooltipHost, { content: "Show " + tooltipText + " contents", calloutProps: { gapSpace: 0 } },
                    React.createElement("span", { "aria-hidden": "true", style: { cursor: 'pointer' } }, "/")));
            };
            return _this;
        }
        BreadcrumbBasicExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Label_1.Label, { className: exampleStyles.exampleLabel }, "With no maxDisplayedItems"),
                React.createElement(Breadcrumb_1.Breadcrumb, { items: [
                        { text: 'Files', key: 'Files', onClick: this._onBreadcrumbItemClicked },
                        { text: 'This is folder 1', key: 'f1', onClick: this._onBreadcrumbItemClicked },
                        { text: 'This is folder 2 with a long name', key: 'f2', onClick: this._onBreadcrumbItemClicked },
                        { text: 'This is folder 3 long', key: 'f3', onClick: this._onBreadcrumbItemClicked },
                        { text: 'This is folder 4', key: 'f4', onClick: this._onBreadcrumbItemClicked },
                        { text: 'This is folder 5 another', key: 'f5', onClick: this._onBreadcrumbItemClicked, isCurrentItem: true }
                    ], ariaLabel: 'Breadcrumb with no maxDisplayedItems' }),
                React.createElement(Label_1.Label, { className: exampleStyles.exampleLabel, style: { marginTop: '24px' } }, "With Custom Divider Icon"),
                React.createElement(Breadcrumb_1.Breadcrumb, { items: [
                        { text: 'Files', key: 'Files', onClick: this._onBreadcrumbItemClicked },
                        { text: 'This is folder 1', key: 'f1', onClick: this._onBreadcrumbItemClicked },
                        { text: 'This is folder 2', key: 'f2', onClick: this._onBreadcrumbItemClicked },
                        { text: 'This is folder 3', key: 'f3', onClick: this._onBreadcrumbItemClicked },
                        { text: 'This is folder 4', key: 'f4', onClick: this._onBreadcrumbItemClicked },
                        { text: 'This is folder 5', key: 'f5', onClick: this._onBreadcrumbItemClicked, isCurrentItem: true }
                    ], dividerAs: this._getCustomDivider, ariaLabel: 'Breadcrumb with custom divider icon' }),
                React.createElement(Label_1.Label, { className: exampleStyles.exampleLabel, style: { marginTop: '24px' } }, "With maxDisplayedItems set to three"),
                React.createElement(Breadcrumb_1.Breadcrumb, { items: [
                        { text: 'Files', key: 'Files', href: '#/examples/breadcrumb', onClick: this._onBreadcrumbItemClicked },
                        {
                            text: 'This is link 1',
                            key: 'l1',
                            href: '#/examples/breadcrumb',
                            onClick: this._onBreadcrumbItemClicked
                        },
                        {
                            text: 'This is link 2',
                            key: 'l2',
                            href: '#/examples/breadcrumb',
                            onClick: this._onBreadcrumbItemClicked
                        },
                        {
                            text: 'This is link 3 with a long name',
                            key: 'l3',
                            href: '#/examples/breadcrumb',
                            onClick: this._onBreadcrumbItemClicked
                        },
                        {
                            text: 'This is link 4',
                            key: 'l4',
                            href: '#/examples/breadcrumb',
                            onClick: this._onBreadcrumbItemClicked
                        },
                        {
                            text: 'This is link 5',
                            key: 'l5',
                            href: '#/examples/breadcrumb',
                            onClick: this._onBreadcrumbItemClicked,
                            isCurrentItem: true
                        }
                    ], maxDisplayedItems: 3, ariaLabel: 'Breadcrumb with maxDisplayedItems set to three', overflowAriaLabel: 'More links' }),
                React.createElement(Label_1.Label, { className: exampleStyles.exampleLabel, style: { marginTop: '24px' } }, "With maxDisplayedItems set to two and overflowIndex set to 1 (second element)"),
                React.createElement(Breadcrumb_1.Breadcrumb, { items: [
                        { text: 'TestText1', key: 'TestKey1' },
                        { text: 'TestText2', key: 'TestKey2' },
                        { text: 'TestText3', key: 'TestKey3' },
                        { text: 'TestText4', key: 'TestKey4' }
                    ], maxDisplayedItems: 2, overflowIndex: 1, overflowAriaLabel: 'More items', ariaLabel: 'Breadcrumb with maxDisplayedItems set to two and overflowIndex set to 1' })));
        };
        return BreadcrumbBasicExample;
    }(React.Component));
    exports.BreadcrumbBasicExample = BreadcrumbBasicExample;
});
//# sourceMappingURL=Breadcrumb.Basic.Example.js.map