var Render = /** @class */ (function () {
    function Render() {
    }
    Render.render = function (elemProps) {
        var element = document.createElement(elemProps.name);
        element.innerHTML = elemProps.text;
        return element;
    };
    return Render;
}());
var Widget = /** @class */ (function () {
    function Widget(elemProps) {
        this.root = document;
        this.renderEngine = Render;
        this.elemProps = elemProps;
    }
    Widget.prototype.render = function () {
        this.element = this.renderEngine.render(this.elemProps);
    };
    Widget.prototype.mount = function () {
        document.body.appendChild(this.element);
    };
    return Widget;
}());
var buttonProps = {
    name: "button",
    text: "my-btn",
};
var btn = new Widget(buttonProps);
btn.render();
btn.mount();
