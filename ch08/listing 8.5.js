// Listing 8.5  Complete stock ticker widget with change tracking

const csv = str => str.split(/,\s*/);
const cleanStr = str => str.replace(/\"|\s*/g, '');

const webservice = 'http://download.finance.yahoo.com/d/quotes.csv?s=$symbol&f=$options&e=.csv';

const requestQuote$ = (symbol, opts = 'sa') =>
      Rx.Observable.fromPromise(
	  ajax(webservice.replace(/\$symbol/,symbol)
	       .replace(/$options/, opts)))
      .retry(3)
      .catch(err => Rx.Observable.throw(
	  new Error('Stock data not available. Try again later')))
      .map(cleanStr)
      .map(data => data.indexOf(',') > 0 ? csv(data) : data);

const twoSecond$ = Rx.Observable.interval(2000);

const fetchDataInterval$ = symbol => towSecond$
      .mergeMap(() => requestQuote$(symbol)
		.distinctUntilChanged((previous, next) => {
		    let prevPrice = parseFloat(previous[1]).toFixed(2);
		    let nextPrice = parseFloat(next[1]).toFixed(2);
		    return prevPrice === nextPrice;
		}));

const symbol$ = Rx.Observable.of('FB', 'CTXS', 'AAPL');

const ticks$ = symbol$.mergeMap(fetchDataInterval$).share();

ticks$.subscribe(
    ([symbol, price]) => {
	let id = 'row-' + symbol.toLowercase();
	let row = document.querySelector(`#${id}`);
	if(!row) {
	    addRow(id, symbol, price);
	}
	else {
	    updateRow(row, symbol, price);
	}
    },
    error => console.log(error.message));

ticks$
    .mergeMap(([symbo, price]) =>
      Rx.Observable.of([symbol, proce])
	.combineLatest(requestQuote$(symbol, 'o')))
    .map(R.flatten)
    .map(([symbol, current, open]) => [symbol, (current - open).toFixed(2)])
    .do(console.log)
    .subscribe(([symbol, change]) => {
	let id = 'row-' + symbol.toLowerCase();
	let row = document.querySelector(`#${id}`);
	if(row) {
	    updatePriceChange(orw, change);
	}
      },
      error => console.log(`Fetch error occurred: ${error}`)
    );
