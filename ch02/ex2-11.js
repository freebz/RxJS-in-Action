// Single-value, Asynchronous

var Rx = require('rx');
var increment = num => num + 1;

const fortyTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
	resolve(42);
    }, 5000);
});

Rx.Observable.fromPromise(fortyTwo)
    .map(increment)
    .subscribe(console.log); //-> 43

console.log('Program terminated');
