const ticks$ = symbol$mergeMap(fetchDataInterval$).share();

const sub1 = ticks$.subscribe(
    quoteDetails => updatePanel1(quoteDetails.symbol, quoteDetails.price)
);

const sub2 = ticks$.subscribe(
    quoteDetails => updatePanel2(quoteDetails.symbol, quoteDetails.price)
);
