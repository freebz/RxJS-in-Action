const mouseUp$ = Rx.Observable.fromEvent(document, 'mouseup');

const touchEnd$ = Rx.Observable.fromEvent(document, 'touchend');


mouseUp$.subscribe(/* Handle mouse click */);

touchEnd$.subscribe(/* Handle touch click */);
