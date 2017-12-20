const Rx = require('rxjs');


const source$ = Rx.Observable.interval(1000)
      .take(10)
      .do(num => {
	  console.log(`Running some code with ${num}`);
      });

const published$ = source$.publishReplay(2);

published$.subscribe(createObserver('SubA'));

setTimeout(() => {
    published$.subscribe(createObserver('SubB'));
}, 5000)

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
