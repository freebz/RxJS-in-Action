// Listing 10.7  Implementing custom ofType operator

const Rx = require('rxjs');


Rx.Observable.prototype.ofType = function (...types) {
    return this.filter(({ type }) => {
	const len = types.length;
	switch (len) {
	case 0:
	    throw new Error('Must specify at least one type! ');
	case 1:
	    return type === types[0];
	default:
	    return types.indexOf(type) > -1;
	}
    });
}



const actions$ = new Rx.Subject();
const dispatch = action => action$.next(action);
