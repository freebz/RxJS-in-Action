const interval$ = Rx.Observable.interval(1000);
const clicks$ = Rx.Observable.fromEvent(document, 'click');

interval$.takeUntil(clicks$)
    .subscribe(
	x   => console.log(x),
	err => console.log(`Error: ${err}`),
	()  => console.log('OK, user is back!'));
