const Rx = require('rxjs');


Rx.Observable.of('a', 'b', 'c', 'a', 'a', 'b', 'b')
    .distinctUntilChanged()
    .subscribe(console.log);
