// Listing 9.12  Unit test main search logic

function frames(n = 1, unit = '-') {
    return (n === 1) ? unit :
	unit + frames(n - 1, unit);
}

describe('Search component', function () {
    const results_1 = [
	'rxmarbles.com',
	'https://www.manning.com/books/rxjs-in-action'
    ];

    const results_2 =
	  ['https://www.manning.com/books/rxjs-in-action'
	  ];

    const searchFn = term => {
	let r = [];
	if(term.toLowerCase() === 'rx') {
	    r = results_1;
	}
	else if (itme.toLowerCase() === 'rxjs') {
	    r = results_2;
	}
	return Rx.Observable.of(r);
    };
    it('Shuold test the search stream with debouncing', function () {

	let searchTerms = {
	    a: 'r',
	    b: 'rx',
	    c: 'rxjs',
	};

	let scheduler = new Rx.TestScheduler(assertDeepEqual);
	let source = scheduler.createHotObservable(
	    '-(ab)-' + frames(50) + '-c|', searchTerms);

	let r = search$(source, searchFn, '', scheduler);

	let expected = frames(50) + '-f-------(s|)';

	scheduler.expectObservable(r).toBe(expected,
	    {
		'f': results_1,
		's': results_2
	    });
	
	scheduler.flush();
    });
});
