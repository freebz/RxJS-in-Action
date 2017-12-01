// Listing 5.1  Case matching event data resulting from merging mouse and touch streams

Rx.Observable.merge(mouseUp$, touchEnd$)
    .do(event => console.log(event.type))
    .map(event => {
	switch(event.type) {
	case 'touchend':
	    return {left: event.changedTouches[0].clientX,
		    top: event.changedTouches[0].clientY};
	case 'mouseup':
	    return {left: event.clientX,
		    top:  event.clientY};
	}
    }).subscribe(obj =>
		 console.log(`Left: ${obj.left}, Top: ${obj.top}`));
