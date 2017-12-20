const Rx = require('rxjs');


const source$ = Rx.Observable.from([1,2,3,4])
      .filter(isEven)
      .map(x => x * x)
      .share();
source$.subscribe(x => console.log(`Stream 1 ${x}`));
source$.subscribe(x => console.log(`Stream 2 ${x}`));

function isEven(x) {
    return (x % 2) === 0;
}
