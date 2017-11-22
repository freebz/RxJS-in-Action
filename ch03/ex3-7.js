let sinceLast = new Date();

Rx.Observable.fromEvent(document, 'mouseup')
    .filter(e => {
	let timeElapsed = new Date() -sinceLast;
	sinceLast = new Date();
	return timeElapsed < 200;
    }).subscribe(() => console.log('double clicked'));
