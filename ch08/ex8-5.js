const requestQuote$ = symbol =>
      Rx.Observable.fromPromise(
	  ajax(webservice.replace(/\$symbol/, symbol)))
      .retry(3)
      .map(response => response.replace(/"/g, ''))
      .map(csv);



const fetchDataInterval$ = symbol => twoSecond$
      .mergeMap(() => requestQuote$(symbol))
      .retry(3)
      .catch(err => Rx.Observable.throw(
	  new Error('Stock data not available. Try again later!')));
