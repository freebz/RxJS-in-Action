// Listing 6.5  Combining multiple URL shortener streams

const urlField = document.querySelector('#url');

const url$ = Rx.Observable.fromEvent(urlField, 'blur')
      .pluck('target', 'value')
      .filter(isUrl)
      .switchMap(input =>
          Rx.Observable.combineLatest(bitly$(input), goog$(input)))
      .subscribe(([bitly, goog]) => {
	  console.log(`From Bitly: ${bitly}`);
	  console.log(`Form Google: ${goog}`)
      });
