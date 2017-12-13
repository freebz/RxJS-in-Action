// Listing 7.6  Recovering from an exception using catch()

const Rx = require('rxjs');
Rx.Observable.of(2,4,5,8,10)
    .map(num => {
	if(num % 2 !== 0) {
	    throw new Error(`Unexpected odd number: ${num}`);
	}
	return num;
    })
    .catch(err => Rx.Observable.of(6))
    .map(n => n / 2)
    .subscribe(
	(next) => console.log(next),
	(error) => console.log(`Caught: ${error}`),
	() => console.log('All done!')
    );
