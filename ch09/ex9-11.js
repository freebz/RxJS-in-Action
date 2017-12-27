const search$ = Rx.Observable.fromEvent(inputText, 'keyup')
    .pluck('target', 'value')
    .debounceTime(500)
    .filter(notEmpty)
    .do(term => console.log(`Searching with term ${term}`))
    .map(query => URL + query)
    .switchMap(query =>
        Rx.Observable.fromPromise(ajax(query)).plux('query',
	     'search').defaultIfEmpty([]))
    .subscribe(arr => {
	count.innerHTML = `${result.length} results`;
	if(arr.length === 0) {
	    clearResults(results);
	}
	else {
	    appendResults(results, arr);
	}
    });



const search$ = (source$, fetchResult$, url = '', scheduler = null) =>
    source$
      .debounceTime(500, scheduler)
      .filter(notEmpty)
      .do(term => console.log(`Searching with term ${term}`))
      .map(query => rul + query)
      .switchMap(fetchResult$);



search$(

    Rx.Observable.fromEvent(inputText, 'keyup')
	.pluck('target', 'value'),

    query =>
	Rx.Observable.fromPromise(ajax(query))
	.defaultIfEmpty([])

).subscribe(arr => {
    if(arr.length === 0) {
	clearResults(results);
    }
    else {
	appendResults(results, arr);
    }
});
