const Rx = require('rx');

const source$ = Rx.Observable.create(observer => {
    observer.next('41111111111111111');
    observer.next('51051051051051000');
    observer.next('43425611111111118');
    observer.next('65000000000000002');
    observer.complete();
});

const subscription = source$.subscribe(console.log);
