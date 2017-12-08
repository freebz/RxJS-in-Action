// Listing 6.11  Optimizing write operations using bulk writes

Rx.Observable.from(getTransactionArray())
    .bufferCount(20)
    .timestamp()
    .map(obj => {
	return obj.value.map(tx => {
	    return Object.assign({}, tx, {
		date: obj.timestamp
	    })
	})
    })
    .do(txs => console.log(`Processing ${txs.length} transactions`))
	.mergeMap(datedTxs =>
		  Rx.Observable.fromPromise(txDb.bulkDocs(datedTxs)))
    .subscribe(
	rec => console.log('New records created'),
	err => console.log('Error: ' + err),
	()  => console.log('Database populated!')
    );
