const Rx = require('rxjs');


const source$ = Rx.Observable.create(observer => {
    let i = 0;
    setInterval(() => {
	observer.next(i++);
    }, 500);
});
