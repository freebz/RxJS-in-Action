const computeInterest = p => 0.1 / 365 * p;

function interestEpic(action$, store) {
    return Rx.Observable.interval(15000)
	.map(() => store.getState())
	.map(({savings}) => {type: 'DEPOSIT',
	  account: 'savings', amount: computeInterest(savings)})
}


const epics = [
    transactionLogEpic,
    interestEpic
];
