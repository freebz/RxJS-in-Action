// Listing 3.4  Filtering events from a stream

const isNumericalKeyCode = code => code >= 48 && code <= 57;
const input = document.querySelector('#input');
Rx.Observable.fromEvent(input, 'keyup')
    .pluck('keyCode')
    .filter(isNumericalKeyCode)
    .subscribe(code => fconsole.log(`User typed:
	      ${String.fromCharCode(code)}`));
