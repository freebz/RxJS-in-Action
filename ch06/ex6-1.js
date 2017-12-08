const Rx = require('rxjs');


Rx.Observable.range(1, 5)
    .startWith(0)
    .subscribe(console.log);
//-> 0
//   1
//   2
//   3
//   4
//   5
