const observerble = events => {
    const INTERVAL = 1 * 1000;
    let schedulerId;

    return {
	subscribe: observer => {
	    scheduleId = setInterval(() => {
		if(events.length == 0) {
		    observer.complete();
		    clearInterval(scheduleId);
		    scheduleId = undefined;
		}
		else {
		    observer.next(events.shift());
		}
	    }, INTERVAL);

	    return {
		unsubscribe: () => {
		    if(scheduleId) {
			clearInterval(scheduleId);
		    }
		}
	    };
	}
    }
};



let sub = observerble([1, 2, 3]).subscribe({
    next: console.log,
    complete: () => console.log('Done!')
});
//-> 1
//   2
//   3
//   Done!
