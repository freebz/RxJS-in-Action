// Listing 5.6  Updating multiple stock symbols

const symbols$ = Rx.Observable.of('FB', 'CTXS', 'AAPL');

const ticks$ = symbols$.mergeMap(fetchDataInterval$);

ticks$.subscribe(
    ([symbol, price]) => {
	let id = 'row-' + symbol.toLowerCase();
	let row = document.querySelector(`#${id}`);
	if(!row) {
	    addRow(id, symbol, price);
	}
	else {
	    updateRow(row, symbol, price);
	}
    },
    error => console.log(error.message));
