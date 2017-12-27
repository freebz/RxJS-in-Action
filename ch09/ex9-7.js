it('Should add numbers from a generator', function () {

    const adder = (total, delta) => total + delta;

    function* numbers() {
	let start = 0;
	while(true) {
	    yield start++;
	}
    }

    Rx.Observable.from(numbers)
	.take(10)
	.reduce(adder)
	.subscribe(total => {
	    expect(total).to.equal(45);
	});
});



it('Should add numbers together with delay', function () {
    Rx.Observable.from([1, 2, 3, 4, 5, 6, 7, 8, 9])
	.reduce((total, delta) => total + delta)
	.delay(1000)
	.subscribe(total => {
	    expect(total).to.equal(45);
	});
});



Rx.Observable.from([1, 2, 3, 4, 5, 6, 7, 8, 9])
    .reduce((total, delta) => total + delta)
    .delay(1000)
    .subscribe(total => {
	expect(total).to.equal('non-sense!');
    });
