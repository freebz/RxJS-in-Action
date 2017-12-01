// Listing 5.5  Mapping one stream into another

const fetchDataInterval$ = symbol => twoSecond$
      .mergeMap(() => requestQuote$(symbol));



fetchDataInterval$('FB')
    .subscribe(([symbol, price]) =>
        console.log(`${symbol}, ${price}`)
    );
