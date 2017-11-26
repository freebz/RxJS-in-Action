// Listing 4.9  Manual debouncing logic for smart search widget

let timeoutId = null;

searchBox.addEventListener('keyup', function (event) {

    clearTimeout(timeoutId);

    timeoutId = setTimeout(function (query) {
	console.log('querying...');
	let searchResults = [];
	if(query && query.length > 0) {
	    clearResults(results);
	    for(let result of testData) {
		if(result.startsWith(query)) {
		    searchResults.push(result);
		}
	    }
	}
	for(let result of searchResults) {
	    appendResults(result, results);
	}
      }
    }, 1000, event.target.value);
});
