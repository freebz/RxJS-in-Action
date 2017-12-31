// Listing 10.6  Plugging into the middleware

const txDb = new PouchDB('transactions');

class Transaction {
    constructor(account, amount, balance, timestamp) {
	this.account = account;
	this.amount = amount;
	this.balance = balance;
	this.timestamp = timestamp;
    }
}

function transactionLogEpic(action$, store) {
    return action$.ofType('WITHDRAW', 'DEPOSIT')
	.timestamp()
	.map(obj => ({...obj.value, timestamp: obj.timestamp}))
	.map(action => ({
	    ...action,
	    balance: store.getState()[action.account] - action.amount
	}))
	.map(dateAction => (
	    new Transaction(
		datedAction.account,
		datedAction.amount,
		datedAction.balance,
		datedAction.timestamp
	    )
	})
	.mergeMap(datedTx =>
	    Rx.Observable.fromPromise(txDb.post(datedTx))
	        .mapTo({payload: {...datedTx}, type: 'LOG'})
		.catch(() =>
		    Rx.Observable.of({type: 'LOG', payload: 'TX WRITE FAILURE!'})
		)
	);
}
