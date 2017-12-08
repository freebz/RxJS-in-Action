const Rx = require('rxjs');


Rx.Observable.combineLatest(
    Rx.Observable.empty(),
    Rx.Observable.range(1, 3))
    .subscribe(console.log); //-> [42,4]
