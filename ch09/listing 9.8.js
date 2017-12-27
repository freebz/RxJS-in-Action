// Listing 9.8  Publishing values on an async scheduler

it('Emits values on an asynchronous scheduler', function (done) {
    let temp = [];
    Rx.Observable.range(1, 5, Rx.Scheduler.async)
	.do([].push.bind(temp))
	.subscribe(value => {
	    expect(temp).to.have.length(value);
	    expect(temp).to.contain(value);
	}, done, done);
});
