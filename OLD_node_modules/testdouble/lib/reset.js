"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("./wrap/lodash");
var quibble = require("quibble");
var store_1 = require("./store");
var onResetHandlers = [];
var onNextResetHandlers = [];
exports.default = lodash_1.default.tap(function () {
    store_1.default.reset();
    quibble.reset();
    lodash_1.default.each(onResetHandlers, function (resetHandler) {
        return resetHandler();
    });
    lodash_1.default.each(onNextResetHandlers, function (resetHandler) {
        return resetHandler();
    });
    onNextResetHandlers = [];
}, function (reset) {
    reset.onReset = function (func) {
        return onResetHandlers.push(func);
    };
    reset.onNextReset = function (func) {
        return onNextResetHandlers.push(func);
    };
});
