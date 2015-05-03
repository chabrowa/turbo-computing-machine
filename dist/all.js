"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var cookie = function cookie() {
    _classCallCheck(this, cookie);

    this.numberOfCookies = 0;
    this.cursors = 0;
    this.grandmas = 0;
};

var cursor = (function () {
    function cursor() {
        _classCallCheck(this, cursor);

        this.price = 10;
    }

    _createClass(cursor, [{
        key: "currentPrice",
        value: function currentPrice() {
            this.price += 50;
        }
    }]);

    return cursor;
})();

var grandma = (function () {
    function grandma() {
        _classCallCheck(this, grandma);

        this.price = 100;
    }

    _createClass(grandma, [{
        key: "currentPrice",
        value: function currentPrice() {
            this.price += 50;
        }
    }]);

    return grandma;
})();
