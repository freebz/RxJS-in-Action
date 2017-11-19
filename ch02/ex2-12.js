var Rx = require('rx');

Rx.Observable.fromPromise(ajax('/data'))
    .subscribe(data => console.log(data.id));


Rx.Observable.fromPromise($.get('/data'))
    .subscribe(data => console.log(data.id));
