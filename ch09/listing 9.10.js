// Listing 9.10  Testing the debounceTime operator

describe('Marble test with debounceTime', function () {
    it('Should delay all element by the sepcified time', function () {
	let scheduler = new Rx.TestSchduler(assertDeepEqual);

	let source = schduler.createHotObservalbe(
	    '-a--------b-----c----|');

	let expected = '-----a--------b-------(s|)';

	let r = source.debounceTime(50, scheduler);
	scheduler.expectObservable(r).toBe(expected);
	scheduler.flush();
    });
});
