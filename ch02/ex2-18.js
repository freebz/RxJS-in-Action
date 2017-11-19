const Rx = require('rx');


const computeFutureValue = new Promise((resolve, reject) => {
    setTimeout(() => {
	resolve(42);
    }, 5000);
});

Rx.Observable.fromPromise(computeFutureValue)
    .subscribe(
	val => {
	    console.log(val);
	},
	err => {
	    console.log(`Error ocurred: ${err}`);
	},
	() => {
	    console.log('All done!');
	});
