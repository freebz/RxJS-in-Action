interface Scheduler {
    now(): number;
    schedule(work, delay?, state?): Subscription);
    flush(): void;
    active: boolean;
    actions: Action();
    scheduledId: number;
}


it('Should schedule things in order', function () {
    let stored = [];

    let store = state => () => stored.push(state);

    let scheduler = Rx.Scheduler.queue;

    scheduler.schedule(store(1));
    scheduler.schedule(store(2));
    scheduler.schedule(store(3));
    scheduler.schedule(store(4));
    scheduler.schedule(store(5));

    scheduler.flush();

    expect(stored).to.deep.equal([1, 2, 3, 4, 5]);
});



it('Emits values synchronously on default scheduler', function () {
    let temp = [];
    Rx.Observable.range(1, 5)
	.do([].push.bind(temp))
	.subscribe(value => {
	    expect(temp).to.have.length(value);
	    expect(temp).to.contain(value);
	});
});
