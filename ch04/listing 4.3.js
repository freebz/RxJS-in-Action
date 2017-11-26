// Listing 4.3  Explicit time using JavaScript timing functions and RxJS

const source$ = Rx.Observable.create(observer => {
    let num = 0;
    const id = setInterval(() => {
	observer.next(`Next ${num++}`);
    }, 2000);

    return () => {
	clearInterval(id);
    }
});

const subscription = source$.subscribe(
    next  => console.log(next),
    error => console.log(error.message),
       () => console.log('Done!')
);

setTimeout(function () {
    subscription.unsubscribe();
}, 8000);
