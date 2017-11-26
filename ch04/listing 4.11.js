// Listing 4.11  Using custom debounce() method

function sendRequest(query) {
    console.log('querying...');
    let searchResults = [];
    if(query && query.length > 0) {
	clearResults(results);
	for(result of testData) {
	    if(result.startsWith(query)) {
		searchResults.push(result);
	    }
	}
    }
    
    for(let result of searchResults) {
	appendResults(result, results);
    }
}

let debouncedRequest = debounce(sendRequest, 1000);

searchBox.addEventListener('keyup', function (event) {
    debouncedRequest(event.target.value);
});
