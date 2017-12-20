const Rx = require('rxjs');


const source$ = Rx.Observable.interval(1000)
      .take(10)
      .do(num => {
	  console.log(`Running some code with ${num}`);
      });

const published$ = source$.publish();

published$.subscribe(createObserver('SubA'));

published$.subscribe(createObserver('SubB'));

published$.connect();


function createObserver(tag) {
    return {
	next: x => {
	    console.log(`Next: ${tag} ${x}`);
	},
	error: err => {
	    console.log(`Error: ${err}`);
	},
	complete: () => {
	    console.log('Completed');
	}
    };
}

