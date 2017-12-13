const Rx = require('rxjs');

const s1$ = Rx.Observable.of(1, 2, 3, 4, 5, 6, 7, 8, 9);
const s2$ = Rx.Observable.of('a', 'b', 'c', 'd', 'e');

Rx.Observable.zip(s1$, s2$).subscribe(console.log);
//-> [ 1, 'a' ]
//   [ 2, 'b' ]
//   [ 3, 'c' ]
//   [ 4, 'd' ]
//   [ 5, 'e' ]

Rx.Observable.combineLatest(s1$, s2$).subscribe(console.log);
//-> [ 9, 'a' ]
//   [ 9, 'b' ]
//   [ 9, 'c' ]
//   [ 9, 'd' ]
//   [ 9, 'e' ]
