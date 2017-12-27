// Listing 9.5  Testing a stream that adds up all numbers of an array

describe('Adding numbers', function () {
    it('Should add numbers together', function () {

	const adder = (total, delta) => total + delta;

	Rx.Observable.from([1, 2, 3, 4, 5, 6, 7, 8, 9])
	    .reduce(adder)
	    .subscribe(total => {
		expect(total).to.equal(45);
	    });
    });
});
