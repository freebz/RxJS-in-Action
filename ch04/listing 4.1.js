// Listing 4.1  Working with observables and setTimeout()

const source$ = Rx.Observable.create(observer => {
    const timeoutId = setTimeout(() => {
	observer.next();
	observer.complete();
    }, 1000);

    return () => clearTimeout(timeoutId);
});

source$.subscribe(() =>
      document.querySelector('#panel').style.backgroundColor = 'red');
