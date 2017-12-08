withdraw$({
    name: 'Emmet Brown',
    accountId: '3',
    type: 'checking',
    amount: 1000
})
.subscribe(
    tx    => console.log(`Transaction number: ${tx.id}`),
    error => console.log('Error: ' + error),
    ()    => console.log('Operation completed!!')
);



Rx.Observable.fromEvent(txDb, 'created')
    .subscribe(
	() => console.log('Database to accept data!')
    );



Rx.Observable.fromEvent(txDb, 'created')
    .switchMap(() =>
        withdraw$({
	    name: 'Charlie Brown',
	    accountId: '1',
	    type: 'checking',
	    amount: 1000
	})
    )
    ...
