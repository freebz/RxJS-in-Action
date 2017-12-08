const Rx = require('rxjs');


Rx.Observable.combineLatest(
    Rx.Observable.of(42),
    Rx.Observable.interval(1000).take(5))
    .subscribe(console.log);

//-> [42, 0]
//   [42, 1]
//   [42, 2]
//   [42, 3]
//   [42, 4]
