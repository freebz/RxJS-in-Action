document.addEventListener('mouseup', e => {
    if (e.button === 2)
	showCustomContextMenu();
    e.stopPropagation();
});



const mouseClicks = Rx.Observable.fromEvent(document, 'mouseup');
const subscription = mouseClicks.subscrie(someMouseClickObserver);

// ... moments later
subscription.unsubscribe();
