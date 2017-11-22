// Listing 3.1  Disposing of an observable

const Rx = require('rxjs');


const progressBar$ = Rx.Observable.create(observer => {
    const OFFSET = 3000;
    const SPEED = 50;

    let val = 0;
    let timeoutId = 0;
    function progress() {
	if(++val <= 100) {
	    observer.next(val);
	    timeoutId = setTimeout(progress, SPEED);
	}
	else {
	    observer.complete();
	}
    };
    timeoutId = setTimeout(progress, OFFSET);

    return () => {
	clearTimeout(timeoutId);
    };
});
