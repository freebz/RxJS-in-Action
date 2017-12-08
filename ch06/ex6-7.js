const Rx = require('rxjs');


Rx.Observable.forkJoin(
    Rx.Observable.of(42),
    Rx.Observable.interval(1000).take(5))
    .subscribe(console.log); //-> [42,4]
