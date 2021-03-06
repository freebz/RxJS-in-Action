// Listing 2.4  Custom progress indecator module using RxJS

const progressBar$ = Rx.Observable.create(observer => {
    const OFFSET = 3000;
    const SPEED = 50;

    let val = 0;
    function progress() {
	if(++val <= 100) {
	    observer.next(val);
	    setTimeout(progress, SPEED);
	}
	else {
	    observer.complete();
	}
    };
    setTimeout(progress, OFFSET);
});

const label = document.querySelector('#progress-indicator');

progressBar$
    .subscribe(
	val   => label.textContent = (Number.isInteger(val) ? val + "%" : val),
	error => console.log(error.message),
	()    => label.textContent = 'Complete!'
    );
