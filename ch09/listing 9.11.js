// Listing 9.11 Speeding up runInterval() with the virtual time scheduler

it('Should square and add even numbers', function () {
    let scheduler = new Rx.TestScheduler(assertDeepEqual);

    let source = scheduler.createColdObservable(
	'-1-2-3-4-5-6-7-8-9-|');

    let expected = '-------------------(s|';

    let r = runInterval(source);

    scheduler.expectObservable(r).toBe(expected, {'s': 120});

    scheduler.flush();
});
