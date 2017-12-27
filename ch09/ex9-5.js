describe('Asynchronous Test', function () {
    it('Should fetch Wikipedia pages for search term "reactive programming"', function() {
	
	const searhTerm = 'reactive+programming';
	const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=${searhTerm}`;
	
	let result = undefined;
	
	ajax(url, response => {
	    result = response;
	});
	
	expect(result).to.not.be.undefined;
    });
});
