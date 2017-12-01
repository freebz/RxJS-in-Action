Rx.Observable.fromEvent(document, 'click')
    .map(click => Rx.Observable.range(1, 3))
    .switch()
    .subscribe(console.log);


Rx.Observable.fromEvent(document, 'click')
    .merge(Rx.Observable.range(1, 3))
    .subscribe(console.log);


const search$ = Rx.Observable.fromEvent(inputText, 'keyup')
      .pluck('target', 'value')
      .debounceTime(1000)
      .do(query => console.log(`Querying for ${query}`))
      .map(query = >
	   sendRequest(testData, query))
      .switch()
      .subscribe(...);


const search$ = Rx.Observable.fromEvent(inputText, 'keyup')
      ...
      .map(query => sendRequest(testData, query)))
      .subscribe(...)

search$; //-> Observable<Observable<Array>>


const search$ = Rx.Observable.fromEvent(inputText, 'keyup')
      ...
      .mergeMap(query => sendRequest(testData, query)))
      .subscribe(...)

search$; //-> Observable<Array>


const search$ = Rx.Observable.fromEvent(inputText, 'keyup')
      ...
      .mergeMap(query => Rx.Observable.from(queryResults(query)));
