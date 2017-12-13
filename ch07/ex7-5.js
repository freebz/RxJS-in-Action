const requestQuote$ = symbol =>
      Rx.Observable.fromPromise(
	  ajax(webservice.replace(/\$symbol/, symbol)))
      .catch((err$, promies$)=> promise$)
      .map(response => response.replace(/"/g, ''))
      .map(csv);
