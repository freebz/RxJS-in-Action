// Listing 7.9  Stock ticker with error handling

const requestQuote$ = symbol =>
      Rx.Observable.fromPromise(
	  ajax(webservice.replace(/\$symbol/, symbol)))
      .map(response => response.replace(/"/g, ''))
      .map(csv)
      .catch(() =>
	Rx.Observable.of([new Error('Check again later...'), 0]))
      .finally(() => {
	updateSubscription.unsubscribe();
      });
