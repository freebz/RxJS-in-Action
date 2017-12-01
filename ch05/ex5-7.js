mouseUp$
    .take(50)
    .subscribe(
	function next(event) {
	    console.log(event.type);
	},
	function error(e) {
	    console.log(e);
	},
	function complete() {
	    touchEnd$.subscribe(
		event => console.log(event.type)
	    );
	}
    );
