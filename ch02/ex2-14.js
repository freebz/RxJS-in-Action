const EventEmitter = require('events');
const Rx = require('rx');
const addEmitter = new EventEmitter();


addEmitter.on('add', (a, b) => {
    console.log(a + b); //-> Prints 5
});

Rx.Observable.fromEvent(addEmitter, 'add', (a, b) => ({a: a, b: b}))
    .map(input => input.a + input.b)
    .subscribe(console.log); //-> 5

addEmitter.emit('add', 2, 3);
