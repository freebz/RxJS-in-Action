const requestQuote$ = symbol =>
      Rx.Observable.fromPromise(
	  ajax(webservice.replace(/\$symbol/, symbol)))
      .retry(3)
      .map(response => response.replace(/"/g, ''))
      .map(csv);
