// Listing 7.5  Calling the error method on observers when an exception is thrown

const Rx = require('rxjs');
const computeHalf = x => Math.floor(x / 2);
Rx.Observable.of(2,4,5,8,10)
    .map(num => {
	if(num % 2 !== 0) {
	    throw new Error(`Unexpected odd number: ${num}`);
	}
	return num;
    })
    .map(computeHalf)
    .subscribe(
	(next) => console.log(next),
	(error) => console.log(`Cought: ${error}`),
	() => console.log('All done!')
    );
