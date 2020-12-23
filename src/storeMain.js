"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("./store");
var todoReducer_1 = require("./todoReducer");
var otherReducer_1 = require("./otherReducer");
var AppStore = /** @class */ (function (_super) {
    __extends(AppStore, _super);
    function AppStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AppStore;
}(store_1.Store));
;
var appStore = new AppStore({
    todos: todoReducer_1.todoReducer,
    other: otherReducer_1.otherReducer
});
appStore.subscribe(function (state) {
    log(state);
});
appStore.dispatch({
    type: 'ADD_TODO',
    payload: {
        text: 'A new item'
    }
});
appStore.dispatch({
    type: 'REMOVE_TODO',
    payload: {
        text: 'A new item'
    }
});
function log(arg) {
    console.log(JSON.stringify(arg, null, 2));
}
