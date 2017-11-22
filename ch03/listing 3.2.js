// Listing 3.2  Disposing of a promise

const Rx = require('rxjs');


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
	resolve(42);
    }, 10000);
});
promise.then(val => {
    console.log(`In then(): ${val}`);
});

const subscription$ = Rx.Observable.fromPromise(promise).subscribe(val => {
    console.log(`In subscribe(): ${val}`);
});
subscription$.unsubscribe();
