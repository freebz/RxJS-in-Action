const Rx = require('rxjs');
Rx.Observable.of(2,4,5,8,10)
    .map(num => {
	if(num % 2 !== 0) {
	    throw new Error(`Unexpected odd number: ${num}`);
	}
	return num;
    })
    .retryWhen(errors$ => errors$.delay(3000))
    .subscribe(
	num => console.log(num),
	err => console.log(err.message)
    );
