// Listing 9.7  Testing a promise AJAX call within an observable

it('Should fetch Wikipedia pages for search term "reactive programming" ' +
   'using an observable promise', function (done) {

       const searchTerm = 'reactive+programming';
       const url = `https://en.wikipedia.org/w/api.php?action=query&` +
                   `format=json&list=search&utf8=1&search=${searchTerm}`;

       const testFn = query => Rx.Observable.fromPromise(ajax(query))
	     .subscribe(data => {
		 expect(data).to.have.property('query')
		     .with.property('search')
		     .with.length(10);
	     }, null, done);
       testFn(url);
   });
