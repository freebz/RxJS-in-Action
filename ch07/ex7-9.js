const fetchDataInterval$ = symbol => twoSecond$
      .mergeMap(() => requestQuote$(symbol)
		.distinctUntilChanged((previous, next) => {
		    // ...
		}))
      .retry(3);
