"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("rxjs/Subject");
// operators
var operators_1 = require("rxjs/operators");
// observable creation
var interval_1 = require("rxjs/observable/interval");
var of_1 = require("rxjs/observable/of");
var ticker = interval_1.interval(1000)
    .pipe(operators_1.map(function (i) {
    console.log("interval fired " + i);
    if (i === 2) {
        throw Error();
    }
    return i;
}), operators_1.catchError(function (error) { return of_1.of(2); }), operators_1.takeWhile(function (i, index) { return index < 10; }), operators_1.map(function (i) { return i * 10; }));
var subject = new Subject_1.Subject();
ticker.subscribe(subject);
var s1 = subject.subscribe(log);
var s2 = subject.subscribe(function (value) { return log(value * 10); });
var s3 = subject.subscribe(function (value) { return log(value * 100); });
var terminate = ticker.subscribe(function (i) { return i > 40 && terminate.unsubscribe(); });
[s2, s3].forEach(terminate.add.bind(terminate));
function log() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log.apply(console, args);
}
