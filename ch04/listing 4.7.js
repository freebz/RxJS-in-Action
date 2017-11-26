// Listing 4.7  delay shifts the entire observable sequence

const Rx = require('rxjs');


Rx.Observable.of([1, 2, 3, 4, 5])
    .do(x => console.log(`Emitted: ${x}`))
    .delay(200)
    .subscribe(x => console.log(`Received: ${x}`));
