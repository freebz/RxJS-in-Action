// Listing 8.1  Interval factory

const R = require('ramda');
const Rx = require('rxjs');


const interval$ = Rx.Observable.interval(500);

const isEven = x => x % 2 === 0;

interval$
    .filter(isEven)
    .take(5)
    .subscribe(x => {
	console.log(`Even number found: ${x}`);
    });

interval$
    .filter(R.compose(R.not, isEven))
    .take(5)
    .subscribe(x => {
	console.log(`Odd number found: ${x}`);
    });
