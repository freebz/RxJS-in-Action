const requestQuote$ = symbol =>
      Rx.Observable.fromPromise(
	  ajax(webservice.replace(/\$symbol/, symbol)))
      .map(response => response.replace(/"/g, ''))
      .map(csv);


const symbols = ['FB', 'AAPL', 'CTXS'];


Rx.Observable.forkJoin(
    requestQuote$('FB'),
    requestQuote$('AAPL'),
    requestQuote$('CTXS')
);
