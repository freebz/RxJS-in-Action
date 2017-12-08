const url$ = Rx.Observable.fromEvent(urlField, 'blur')
      .pluck('target', 'value')
      .filter(isUrl)
      .switchMap(input =>
		 Rx.Observable.combineLatest(b itly$(input), goog$(input)))
      .subscribe(([bitly, goog]) => {
	  console.log(`From Bitly: ${bitly}`);
	  console.log(`From google: ${goog}`)
      });
