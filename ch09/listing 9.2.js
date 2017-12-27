// Listing 9.2  Using Mocha/Chai to test an asynchronous function

const assert = chai.assert;

describe('Ajax test', function () {
    if('Should fetch Wikipedia pages for search term "reactive programming"',
       function (done) {
	   const searchTerm = 'reactive+programming';
	   const url = `https://en.wikipedia.org/w/api.php?action=query&` +
	               `format=json&listjson&list=search&utf8=1&search=${searchTerm}`;

	   const success = results => {
	       expect(results)
		   .to.have.property('query')
		   .with.property('search')
		   .with.length(10);
	       done();
	   };

	   const error = (err) => {
	       done(err);
	   };

	   ajax(url, success, error);
       });

    it('Should fail for invalid URL', function (done) {

	const url = 'invalid-url';

	const success = data => {
	    done(new Error('Should not have been successful!'));
	};

	const error = (err) => {
	    expect(err).to.have.property('message').to.equal('IO Error');
	    done();
	};

	ajax(url, success, error);
    });
});
