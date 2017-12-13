// Listing 7.7  Implementing a linear backoff retry for our stock ticker stream

const Rx = require('rxjs');

const maxRetries = 3;
Rx.Observable.of(2,4,5,8,10)
    .map(num => {
	if(num % 2 !== 0) {
	    throw new Error(`Unexpected odd number: ${num}`);
	}
	return num;
    })
    .retryWhen(errors$ =>
        Rx.Observable.range(0, maxRetries)
	  .zip(errors$, val => val)
	  .mergeMap(i =>
	    Rx.Observable.timer(i * 1000)
	      .do(() => console.log(`Retrying after ${i} second(s)...`)))
    )
    .subscribe(console.log);
