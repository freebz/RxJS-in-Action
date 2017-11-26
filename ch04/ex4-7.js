const amountTextBox = document.querySelector('#amout');
const warningMessage = document.querySelector('#amount-warning');

Rx.Observable.fromEvent(amountTextBox, 'keyup')
    .bufferCount(5)
    .map(events => events[0].target.value)
    .map(val => parseInt(val, 10))
    .filter(val => !Number.isNaN(val))
    .subscribe(amount => {
	warningMessage.setAttribute('style', 'display: inline;');
    });
