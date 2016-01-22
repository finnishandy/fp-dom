var jsdom = require("node-jsdom");

jsdom.env(
    '<p><a class="the-link" href="https://github.com/tmpvar/jsdom">jsdom!</a></p>',
    ["http://code.jquery.com/jquery.js"],
    function (errors, window) {
        console.log(window);
    }
);
