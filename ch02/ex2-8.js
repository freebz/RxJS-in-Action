// Single-value, Synchronous

var Rx = require('rx');

Rx.Observable.of(42).subscribe(console.log); //-> 42
