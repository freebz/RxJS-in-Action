ticks$
    .map(([symbol, price]) => [Try.of(symbol).getOrElseThrow(), price])
    .subscribe(
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
