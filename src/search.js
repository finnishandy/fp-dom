var jsdom = require("node-jsdom").jsdom;
var document = jsdom("hello world");
var window = document.parentWindow;

console.log(window.document.documentElement.outerHTML);
// output: "<html><head></head><body>hello world</body></html>"

console.log(window.innerWidth);
// output: 1024

console.log(window.document.getElementsByTagName('body')[0].innerHTML);
// outputs: function

var _ = function(context) {
    this._ctx = context;

    _.prototype.search = function(selector) {
        this._ctx.getElementsByTagName(selector);
        return this;
    }
}

var $ = (context) => (query) => context.getElementsByTagName(query)[0].innerHTML;

var dom = new _(window.document);

console.log($(window.document)('body'));
console.log(_(window.document).search('body'));