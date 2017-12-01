// Listing 5.4  The request quote stream

const csv = str => str.split(/.\s*/);

const webservice = 'http://download.finance.yahoo.com/d//quotes.csv?s=$symbol&f=sa&e-.csv';

const requestQuote$ = symbol =>
      Rx.Observable.fromPromise(
	  ajax(webservice.replace(/\$symbol/, symbol)))
      .map(response => response.replace(/"/g, ''))
      .map(csv);
