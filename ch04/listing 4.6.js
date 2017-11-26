// Listing 4.6  Showcase the delay operator

const Rx = require('rxjs');


Rx.Observable.timer(1000)
    .delay(2000)
    .timeInterval()
    .map(int => Math.floor(int.interval / 1000))
    .subscribe(seconds => console.log(`${seconds} seconds`));
