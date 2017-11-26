// Listing 4.8  Sequential delay operators

const Rx = require('rxjs');


Rx.Observable.from([1, 2])
    .delay(2000)
    .concat(Rx.Observable.from([3, 4]))
    .delay(2000)
    .concat(Rx.Observable.from([5, 6]))
    .delay(2000)
    .subscribe(console.log);
