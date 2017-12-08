// Listing 6.8  Using forkJoin to fetch multiple stock symbols simultaneously

Rx.Observable.forkJoin(symbols.map(requestQuote$))
    .map(data => data.map(arr => parseInt(arr[1])))
    .subscribe(all => {
	console.log('Total Portfolio Value: ' +
	    new USDMoney(allPrice.reduce(add).toLocalString()));
    });
