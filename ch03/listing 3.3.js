// Listing 3.3  Mapping functions over streams

const Rx = require('rxjs');


Rx.Observable.from([
    'The quick brown fox',
    'jumps over the lazy dog'
    ])
    .map(str => str.split(' '))
    .do(arr => console.log(arr.length))
    .subscribe(console.log);
