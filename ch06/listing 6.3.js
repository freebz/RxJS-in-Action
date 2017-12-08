// Listing 6.3  Managing a temporary session token with using()

function generateSessionToken() {
    return 'xyxyxyxy'.replace(/[xy]/g, c => {
	return Math.floor(Math.random() * 10);
    });
}

const $countDownSession = Rx.Observable.using(
    () => new SessionDisposable(generateSessionToken()),
    () => Rx.Observable.interval(1000)
	.startWith(10)
	.scan(val => val - 1)
	.take(10)
);

$countDownSession.subscribe(console.log);
