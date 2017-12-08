Rx.Observable.from(getTransactionArray())
    .bufferWhen(() =>
	Rx.Observable.race(
	    Rx.Observable.interval(500),
	    Rx.Observable.fromEvent(window, 'beforeunload'))
    )
