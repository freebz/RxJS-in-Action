// Listing 4.12  A simple debounce-optimized search program

const notEmpty = input => !!input && input.trim().length > 0;

const sendRequest = function(arr, query) {
    return arr.filter(item => {
	return query.length > 0 && item.startsWith(query);
    });
}

const search$ = Rx.Observable.fromEvent(searchBox, 'keyup')
      .debounceTime(1000)
      .pluck('target', 'value')
      .filter(notEmpty)
      .do(query => console.log(`Querying for ${query}...`))
      .map(query =>
	   sendRequest(testData, query))
      .subscribe(result => {
	  if(result.length === 0) {
	      clearResults(results);
	  }
	  else {
	      appendResults(result, results);
	  }
      });
