// Listing 6.14  withraw function

function withdraw$({name, accountId, type, amount}) {
    return Rx.Observable.fromPromise(accountsDb.get(accountId))
	.do(doc => console.log(
	    doc.balance < amount ?
		'WARN: This operation will cause an oberdraft:' :
		'Sufficient funds'
	))
	.mergeMap(doc =>
	    Rx.Observable.fromPromise(
		accountsDb.put({
		    _id: doc._id,
		    _rev: doc._rev,
		    balance: doc.balance - amount
		}))
	)
	.filter(response => response.ok)
	.do(() =>
	    console.log('Withdraw succeeded. Creating transaction document'))
	.concatMap(() => writeTx$(
	    new Transaction(name, 'withdraw', amount, type)));
}
