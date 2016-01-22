'use strict';

class DomDash {
    constructor(context) {
        this.context = context;
        this.currentNode = context; // This is traversal context, this.context is always highest possible level on the dom.
        return this;
    }

    search (selector) {
        this.currentNode = this.context.getElementsByTagName(selector);
        return this;
    }

    domCount(selector) {
        return this.context.querySelectorAll(selector).length;
    }

    toString() {
        return this.context;
    }
}

module.exports = function(context) {
    return new DomDash(context);
}

