// Listing 5.3  Reactive search solution

const searchBox = document.querySelector('#search'); //-> <input>
const results = document.querySelector('#results');  //-> <ul>
const count = document.querySelector('#count');      //-> <label>

const URL = 'https://en.wikipedia.org/w/api.php?action=query&format=json&&list=search&utf8=1&search=';

const search$ = Rx.Observable.fromEvent(searchBox, 'keyup')
      .pluck('target', 'value')
      .debounceTime(500)
      .filter(notEmpty)
      .do(term => console.log(`Searching with term ${term}`))
      .map(query => URL + query)
      .mergeMap(query =>
		Rx.Observable.ajax(query)
		.pluck('response', 'query', 'search')
		.defaultIfEmpty([]))
      .mergeMap(R.map(R.prop('title')))
      .subscribe(arr => {
	  count.innerHTML = `${arr.length} results`;
	  clearResults(results);
	  appendResults(arr, results);
      });
