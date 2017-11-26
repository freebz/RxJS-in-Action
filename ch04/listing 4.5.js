// Listing 4.5  Augmenting stock data with the time interval

Rx.Observable.interval(2000)
    .timeInterval()
    .skip(1)
    .take(5)
    .do(int =>
	console.log(`Checking every ${int.interval} milliseconds`})
    .map(int => new Money('USD', newRandomNumber()))
    .subscribe(price => {
	document.querySelector('#price').textContent = price;
    });
