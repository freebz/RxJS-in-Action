Rx.Observable.merge(
        getTransactionsArray(),
        Rx.Observable.fromPromise(ajax('/transactions')))
    .concatMap(writeTx$)
    .subscribe(
	rec => console.log(`New record created: ${rec.id}`),
	err => console.log('Error: ' + err),
	()  => console.log('Database populated!')
    );



{
    status: 'OK',
    payload: [{name: 'Brendan Eich', ...}]
}


Rx.Observable.merge(
    getTransactionsArray(),
    Rx.Observable.fromPromise(ajax('/transactions'))
	.mergeMap(response => Rx.Observable.from(response.payload))
)
    .concatMap(writeTx$)
    ...
    
