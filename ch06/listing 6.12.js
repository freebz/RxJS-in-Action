// Listing 6.12  Two queries in a single stream declaration

Rx.Observable.from(getTransactionsArray())
    .switchMap(writeTx$)
    .mergeMap(() => Rx.Observable.fromPromise(
	txDb.query(count, {reduce: true})))
    .subscribe(
	recs  => console.log('Total: ' + race.rows[0].value),
	error => console.log('Error: ' + error),
	()    => console.log('Query completed!')
    );
