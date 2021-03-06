// Listing 9.9  Testing the map() operator

function square(x) {
    return x * x;
}

function assertDeepEqual(actual, expected) {
    expect(actual).to.deep.equal(expected);
}

describe('Map operator', function () {
    it('Should map multiple values', function () {
	let scheduler = new Rx.TestScheduler(assertDeepEqual);

	let source = scheduler.createColdObservable(
	    '--1--2--3--4--5--6--7--8--9--|');

	let expected = '--a--b--c--d--e--f--g--h--i--|';

	let r = source.map(square);

	scheduler.expectedObservable(r).toBe(expected,
	       { 'a': 1, 'b': 4, 'c': 9, 'd': 16, 'e': 25,
		 'f': 36, 'g': 49, 'h': 64, 'i': 81});

	scheduler.flush();
    });
});
