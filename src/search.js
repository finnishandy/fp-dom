'use strict';

var jsdom = require("node-jsdom").jsdom;
var html = require('./templates/meeting-info-template');
var _ = require('./dom-dash');
var document = jsdom(html);
var window = document.parentWindow;

console.log(window.document.documentElement.outerHTML);
// output: "<html><head></head><body>hello world</body></html>"

console.log(window.innerWidth);
// output: 1024

console.log(window.document.getElementsByTagName('body')[0].innerHTML);
// outputs: function

var $ = (context) => (query) => context.getElementsByTagName(query)[0].innerHTML;

console.log($(window.document)('body'));
console.log(_(window.document).domCount('.MeetingInfo > div[data-layout="field-container"]'));