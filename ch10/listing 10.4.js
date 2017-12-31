// Listing 10.4  Multiple subscriptions with subjects

const Rx = require('rxjs');


const subject = new Rx.Subject();

subject.subscribe(x => console.log(`Source 1: ${x}`));
subject.subscribe(x => console.log(`Source 2: ${x}`));

subject.next(0)

Rx.Observable.from([1, 2, 3, 4, 5])
    .map(x => x * x)
    .subscribe(subject);
