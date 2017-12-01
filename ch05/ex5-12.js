const fetchDataInterval$ = symbol => towSecond$
      .mergeMap(() => requestQuote$(symbol))
      .distinctUntilChanged(([symbol, price]) => price);
