"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("../wrap/lodash");
var events_1 = require("events");
var storeEmitter = new events_1.EventEmitter();
var globalStore = [];
var store = {
    onReset: function (func) {
        storeEmitter.on('reset', func);
    },
    reset: function () {
        globalStore = [];
        storeEmitter.emit('reset');
    },
    for: function (testDouble, createIfNew) {
        if (createIfNew === void 0) { createIfNew = true; }
        var entry = lodash_1.default.find(globalStore, function (e) { return testDouble === e.testDouble || testDouble === e.alias; });
        if (entry) {
            return entry;
        }
        else if (createIfNew) {
            return lodash_1.default.tap({
                testDouble: testDouble,
                stubbings: [],
                calls: [],
                verifications: []
            }, function (newEntry) {
                return globalStore.push(newEntry);
            });
        }
    },
    registerAlias: function (testDouble, alias) {
        store.for(testDouble).alias = alias;
    }
};
exports.default = store;
