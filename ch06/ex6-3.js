button.addEventListener('click', () => {
    let result, result2 = {};
    ajax('/source1', data => {
	result1 = data;
    });
    
    ajax('/source2', data => {
	result2 = data;
    });

    setTimeout(() => {
	processResults(result1, result2);
    }, arbitraryWaitTimeMe);
});



button.addEventListener('click', () => {
    ajax('/source1', result1 => {
	ajax('/source2', result2 => {
	    processResults(result1, result2);
	});
    });
});



button.addEventListener('click', () => {
    let firstResult;
    ajax('/source1', result => {
	if (firstResult) processResult(result, firstResult);
	else firstResult = result;
    });
    ajax('/source2', result => {
	if (firstResult) processResult(firstResult, result);
	else firstResult = result;
    });
});



clicks$.subscribe(() => {
    source1$.subscribe(result1 => {
	source2$.subscribe(result2 => {
	    processResult(result1, result2);
	});
    });
});



button.addEventListener('click', () => {
    async.parallel([
	ajax('/source1'),
	ajax('/source2')
    ],
    (err, ([result1, result2])) => {
	processResult(result1, result2);
    });
});



button.addEventListener('click', () => {
    Promise.all(ajax('/source1'), ajax('/source2'))
	.then(([result1, resut2]) => {
	    processResult(result1, result2);
	});
});
