const url$ = Rx.Observable.fromEvent(urlField, 'blur')
      .pluck('target', 'value')
      .filter(isUrl)
      .switchMap(input =>
          Rx.Observable.combineLatest(bitly$(input), goog$(input),
            (b, g) => b.length > g.length ? b : g))
      .subscribe(shortUrl => {
	  console.log(`The shorter URL is: ${shortUrl}`);
      });



const APH = 'https://api-ssl.bitly.com';
const LOGIN = '<YOUR LOGIN>';
const KEY = '<YOUR GENERATED KEY>';
