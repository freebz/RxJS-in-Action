const moment = require('moment');
const Rx = require('rxjs');


const p = new Promise((resolve, reject) => {
    setTimeout(() => {
	let isAtAfter10pm = moment().hour() >= 20;
	if(isAtAfter10pm) {
	    reject(new Error('Too late!'));
	}
	else {
	    resolve('Success!');
	}
    }, 5000);
});

const promise$ = Rx.Observable.fromPromise(p);

promise$.subscribe(val => console.log(`Sub1 ${val}`));

// ... after 10 p ... //
promise$.subscribe(val => console.log(`Sub2 ${val}`));
