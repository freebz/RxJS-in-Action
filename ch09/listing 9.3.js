// Listing 9.3  Asynchronous testing with Promise

describe('Ajax with promise', function () {
    it('Should fetch Wikipedia pages for search term "reactive programming"', function() {

	const searchTerm = 'reactive+programming';
	const url = `https://en.wikipedia.org/w/api.php?action=query&` +
	            `format=json&list=search&utf8=1&search=${searchTErm}`;

	return ajax(url)
	    .should.be.fulfilled
	    .should.eventually.have.property('query')
	    .with.property('search')
	    .with.length(10);
    });
});
