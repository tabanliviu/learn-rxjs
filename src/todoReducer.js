"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialState = {
    loading: false,
    loaded: false,
    data: []
};
function todoReducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case 'ADD_TODO':
            return __assign({}, state, { data: state.data.concat([action.payload]) });
        case 'REMOVE_TODO':
            return __assign({}, state, { data: state.data.filter(function (item) { return item.text !== action.payload.text; }) });
        default:
            return state;
    }
}
exports.todoReducer = todoReducer;
