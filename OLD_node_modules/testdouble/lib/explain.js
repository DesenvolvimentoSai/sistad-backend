"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("./wrap/lodash");
var proxy_safe_clone_deep_with_1 = require("./wrap/proxy-safe-clone-deep-with");
var calls_1 = require("./store/calls");
var store_1 = require("./store");
var arguments_1 = require("./stringify/arguments");
var stubbings_1 = require("./store/stubbings");
function explain(testDouble) {
    if (lodash_1.default.isFunction(testDouble)) {
        return explainFunction(testDouble);
    }
    else if (lodash_1.default.isObject(testDouble)) {
        return explainObject(testDouble);
    }
    else {
        return explainNonTestDouble(testDouble);
    }
}
exports.default = explain;
function explainObject(obj) {
    var _a = explainChildren(obj), explanations = _a.explanations, children = _a.children;
    return {
        name: null,
        callCount: 0,
        calls: [],
        description: describeObject(explanations),
        children: children,
        isTestDouble: explanations.length > 0
    };
}
function explainChildren(thing) {
    var explanations = [];
    var children = proxy_safe_clone_deep_with_1.default(thing, function (val, key, obj, stack) {
        if (lodash_1.default.isFunction(val) && stack) {
            return lodash_1.default.tap(explainFunction(val), function (explanation) {
                if (explanation.isTestDouble)
                    explanations.push(explanation);
            });
        }
    });
    return { explanations: explanations, children: children };
}
function describeObject(explanations) {
    var count = explanations.length;
    if (count === 0)
        return 'This object contains no test doubles';
    return "This object contains " + count + " test double function" + (count > 1 ? 's' : '') + ": [" + lodash_1.default.map(explanations, function (e) {
        return "\"" + e.name + "\"";
    }).join(', ') + "]";
}
function explainFunction(testDouble) {
    if (store_1.default.for(testDouble, false) == null) {
        return explainNonTestDouble(testDouble);
    }
    var calls = calls_1.default.for(testDouble);
    var stubs = stubbings_1.default.for(testDouble);
    var children = explainChildren(testDouble).children;
    return {
        name: store_1.default.for(testDouble).name,
        callCount: calls.length,
        calls: calls,
        description: testdoubleDescription(testDouble, stubs, calls) +
            stubbingDescription(stubs) +
            callDescription(calls),
        children: children,
        isTestDouble: true
    };
}
function explainNonTestDouble(thing) {
    return ({
        name: undefined,
        callCount: 0,
        calls: [],
        description: "This is not a test double" + (lodash_1.default.isFunction(thing) ? ' function' : '') + ".",
        isTestDouble: false
    });
}
function testdoubleDescription(testDouble, stubs, calls) {
    return "This test double " + stringifyName(testDouble) + "has " + stubs.length + " stubbings and " + calls.length + " invocations.";
}
function stubbingDescription(stubs) {
    return stubs.length > 0
        ? lodash_1.default.reduce(stubs, function (desc, stub) {
            return desc + ("\n  - when called with `(" + arguments_1.default(stub.args) + ")`, then " + planFor(stub) + " " + argsFor(stub) + ".");
        }, '\n\nStubbings:')
        : '';
}
function planFor(stub) {
    switch (stub.config.plan) {
        case 'thenCallback': return 'callback';
        case 'thenResolve': return 'resolve';
        case 'thenReject': return 'reject';
        default: return 'return';
    }
}
function argsFor(stub) {
    switch (stub.config.plan) {
        case 'thenCallback': return "`(" + arguments_1.default(stub.stubbedValues, ', ') + ")`";
        default: return arguments_1.default(stub.stubbedValues, ', then ', '`');
    }
}
function callDescription(calls) {
    return calls.length > 0
        ? lodash_1.default.reduce(calls, function (desc, call) { return desc + ("\n  - called with `(" + arguments_1.default(call.cloneArgs) + ")`."); }, '\n\nInvocations:')
        : '';
}
function stringifyName(testDouble) {
    var name = store_1.default.for(testDouble).name;
    return name ? "`" + name + "` " : '';
}
