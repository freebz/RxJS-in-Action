// Listing 10.5  Build a promise-like operator with subjects

const Rx = require('rxjs');


Rx.Observable.promiseLike = function(fn) {
    let subject = new Rx.AsyncSubject();

    let resolve = x => {
	subject.next(x);
	subject.complete();
    };

    let reject = e => {
	subject.error(e);
    };

    fn(resolve, reject);
    return subject.asObservable();
};



const randomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const random$ = Rx.Observable.promiseLike((resolve, reject) => {
    resolve(randomInt(0, 1000));
});

random$.subscribe(console.log);  //744
random$.subscribe(console.log);  //744
random$.subscribe(console.log);  //744
random$.subscribe(console.log);  //744
random$.subscribe(console.log);  //744

