const Rx = require('rxjs');
const moment = require('moment');


const interval$ = Rx.Observable.create(observer => {
    let i = 0;

    observer.next('Starting interval...');
    let intervalId = setInterval(() => {

	let isAtAfter10pm = moment().hour() >= 20;

	if(isAtAfter10pm) {
	    clearInterval(intervalId);
	    observer.complete();
	}

	observer.next(`Next ${i++}`);
    }, 1000);
});

// ... before 10 pm ... //
const sub1 = interval$.subscribe(val => console.log(`Sub ${val}`));

// ... after 10 pm ... //
const sub2 = interval$.subscribe(val => console.log(`Sub ${val}`));
