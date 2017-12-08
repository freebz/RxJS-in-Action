// Listing 6.1  Hooking into the start of a stream

function startWith(value) {
    return Rx.Observable.create(subscriber => {
	let source = this;
	try {
	    subscriber.next(value);
	}
	catch(err) {
	    subscriber.error(err);
	}
	return source.subscribe(subscriber);
    });
}

Rx.Observable.prototype.startWith = startWith;
