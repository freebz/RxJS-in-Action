// Listing 9.4  Search stream used in the smart search component

const search$ = Rx.Observable.fromEvent(inputText, 'keyup')
      .dobounceTime(500)
      .pluck('target', 'value')
      .filter(notEmpty)
      .do(term => console.log(`Searching with term ${term}`))
      .map(query => URL + query)
      .switchMap(query =>
          Rx.Observable.fromPromise(ajax(query))
	      .pluck('query', 'search')
	      .defaultIfEmpty([]))
      .do(result => {
	  count.innerHTML = `${result.length} results`;
      })
      .subscribe(arr => {
	  clearResults(results);
	  appendResults(results, arr);
      });
