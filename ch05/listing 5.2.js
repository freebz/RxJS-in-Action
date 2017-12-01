// Listing 5.2  Normalizing upstream event data merges the streams

const conformantMouseUp$ = mouseUp$.map(event => ({
    left: event.clientX,
    top: event.clientY
}));

const conformantTouchEnd$ = touchEnd$.map(event => ({
    left: event.changedTouches[0].clientX,
    top: event.changedTouches[0].clientY,
}));

Rx.Observable.merge(conformantMouseUp$, conformantTouchEnd$)
    .subscribe(obj =>
        console.log(`Left: ${obj.left}, Top: ${obj.top}`));
