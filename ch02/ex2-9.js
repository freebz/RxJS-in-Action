// Multi-value, Synchoronous

var Rx = require('rx');

Rx.Observable.from([1, 2, 3]).subscribe(console.log);
// -> 1
//    2
//    3

Rx.Observable.from('RxJS').subscribe(console.log);
// -> "R"
//    "x"
//    "J"
//    "S"
