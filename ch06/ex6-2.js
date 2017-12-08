class DisposableResource {
    constructor(value) {
	this.value = value;
	this.disposed = false;
    }

    getValue() {
	if (this.disposed) {
	    throw new Error('Object is disposed');
	}
	return this.value;
    }

    unsubscribe() {
	if (!this.disposed) {
	    this.disposed = true;
	    his.value = null;
	}
	console.log('Disposed');
    }
}


const Rx = require('rxjs');


const source$ = Rx.Observable.using(
    () => new DisposableResource(42),
    resource => Rx.Observable.interval(1000)
);

const subscription = source$.subscribe(
    next => console.log(`Next: ${next}`),
    err  => console.log(`Error:${err}`),
    ()   => console.log('Completed')
);

//...
subscription.unsubscribe();
