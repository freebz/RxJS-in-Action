// Listing 6.10  Populating the database

const writeTx$ = tx => Rx.Observable.of(tx)
      .timestamp()
      .map(obj => Object.assign({}, obj.value, {
	            date: obj.timestamp
                  })
      )
      .do(tx => console.log(`Processing transaction for: ${tx.name}`))
      .mergeMap(datedTx => Rx.Observable.fromPromise(txDb.post(datedTx)));

Rx.Observable.from(getTransactionArray())
    .concatMap(writeTx$)
    .subscribe(
	rec => console.log(`New record created: ${rec.id}`),
	err => console.log('Error: ' + err),
	()  => console.log('Database populated:')
    );
