Rx.Observable.interval(1000)
    .take(10)
    .filter(num => num % 2 === 0)
    .map(num => num * num)
    .reduce((total, delta) => total + delta)
    .subscribe(console.log);



const isEven = num => num % 2 === 0;
const square = num => num * num;
const add = (a, b) => a + b;

const runInterval = (source$) =>
      source$
      .take(10)
      .filter(isEven)
      .map(square)
      .reduce(add);



it('Should square and add even numbers', function (done) {

    this.timeout(20000);
    runInterval(Rx.Observable.interval(1000))
	.subscribe({
	    next: total => expect(total).to.equal(120),
	    err:  err   => assert.fail(err.message),
	    complete: done
	});
});
