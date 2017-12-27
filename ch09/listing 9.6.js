// Listing 9.6  Testing an observable with a delay

it('Should add numbers together with delay', function (done) {
    Rx.Observable.from([1, 2, 3, 4, 5, 6, 7, 8, 9])
	.reduce((total, delta) => total + delta)
	.delay(1000)
	.subscribe(total => {
	    expect(total).to.equal(45);
	}, null, done);
});
