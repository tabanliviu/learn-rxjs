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
function otherReducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case 'ADD_OTHER':
            var data = state.data.concat([action.payload]);
            return __assign({}, state, { data: data });
        default:
            return state;
    }
}
exports.otherReducer = otherReducer;
