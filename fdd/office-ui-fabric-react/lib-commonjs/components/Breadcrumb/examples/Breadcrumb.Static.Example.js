"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Breadcrumb_1 = require("office-ui-fabric-react/lib/Breadcrumb");
var BreadcrumbStaticExample = /** @class */ (function (_super) {
    tslib_1.__extends(BreadcrumbStaticExample, _super);
    function BreadcrumbStaticExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onBreadcrumbItemClicked = function (ev, item) {
            console.log("Breadcrumb item with key \"" + item.key + "\" has been clicked.");
        };
        return _this;
    }
    BreadcrumbStaticExample.prototype.render = function () {
        return (React.createElement("div", { style: { display: 'inline-block' } },
            React.createElement(Breadcrumb_1.Breadcrumb, { items: [
                    { text: 'Files', key: 'Files', onClick: this._onBreadcrumbItemClicked },
                    { text: 'This is folder 1', key: 'f1', onClick: this._onBreadcrumbItemClicked },
                    { text: 'This is folder 2', key: 'f2', onClick: this._onBreadcrumbItemClicked },
                    { text: 'This is folder 3', key: 'f3', onClick: this._onBreadcrumbItemClicked },
                    { text: 'This is folder 4', key: 'f4', onClick: this._onBreadcrumbItemClicked },
                    { text: 'This is folder 5', key: 'f5', onClick: this._onBreadcrumbItemClicked, isCurrentItem: true }
                ], 
                // Returning undefined to OnReduceData tells the breadcrumb not to shrink
                onReduceData: this._returnUndefined, maxDisplayedItems: 3, ariaLabel: 'Breadcrumb with static width', overflowAriaLabel: 'More items' })));
    };
    BreadcrumbStaticExample.prototype._returnUndefined = function () {
        return undefined;
    };
    return BreadcrumbStaticExample;
}(React.Component));
exports.BreadcrumbStaticExample = BreadcrumbStaticExample;
//# sourceMappingURL=Breadcrumb.Static.Example.js.map