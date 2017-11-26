// Listing 4.4  Simulating a simple stock ticker widget

Rx.Observable.interval(2000)
    .skip(1)
    .take(5)
    .map(num => new Money('USD', newRandomNumber()))
    .subscribe(price => {
	document.querySelector('#price').textContent = price;
    });
