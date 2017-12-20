const Rx = require('rxjs');

const arr$ = Rx.Observable.from([1,2,3,4,5,6,7,8,9]);

const sub1 = arr$.subscribe(console.log);

// ... moments later ... //
const sub2 = arr$.subscribe(console.log);
