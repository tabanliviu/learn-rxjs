"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Store = /** @class */ (function () {
    function Store(reducers, state) {
        if (reducers === void 0) { reducers = {}; }
        if (state === void 0) { state = {}; }
        this.subscribers = [];
        this.reducers = reducers;
        this.state = this.reduce(state, {});
    }
    Store.prototype.subscribe = function (fn) {
        var _this = this;
        this.subscribers = this.subscribers.concat([fn]);
        fn(this.value);
        return function () {
            _this.subscribers = _this.subscribers.filter(function (fn) { return fn !== fn; });
        };
    };
    Object.defineProperty(Store.prototype, "value", {
        get: function () {
            return this.state;
        },
        enumerable: true,
        configurable: true
    });
    Store.prototype.dispatch = function (action) {
        var _this = this;
        this.state = this.reduce(this.state, action);
        this.subscribers.forEach(function (subscriberFn) { return subscriberFn(_this.value); });
    };
    Store.prototype.reduce = function (state, action) {
        var newState = {};
        for (var prop in this.reducers) {
            newState[prop] = this.reducers[prop](state[prop], action);
        }
        return newState;
    };
    return Store;
}());
exports.Store = Store;
