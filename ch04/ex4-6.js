const Rx = require('rxjs');


Rx.Observable.timer(0, 50)
    .buffer(Rx.Observable.timer(500))
    .subscribe(
	function (val) {
	    console.log(`Data in buffer: [${val}]`);
	});
//-> Data in buffer: [0,1,2,3,4,5,6,7,8,9]
