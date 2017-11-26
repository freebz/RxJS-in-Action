// Listing 4.13  Controlling button action with throttle

Rx.Observable.fromEvent(document, 'mousemove')
    .throttleTime(2000)
    .subscribe(event => {
	console.log(`Mouse at: ${event.x} and ${event.y}`);
    });
