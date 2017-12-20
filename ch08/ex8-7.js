const futureVal = new Promise((resolve, reject) => {

    const value = computeValue();

    resolve(value);
});

const promise$ = Rx.Observable.fromPromise(futureVal);

promise$.subscribe(console.log);

promise$.subscribe(console.log);




const coldPromise$ = new Rx.Observable(observer => {
    const futureVal = new Promise((resolve, reject) => {

	const value = computeValue();

	resolve(value);
    });

    futureVal.then(result => {
	observer.next(result);
	observer.complete();
    });
});

coldPromise$.subscribe(console.log);

coldPromise$.subscribe(console.log);
