// Listing 4.15  Buffering events for a specific period of time

const password = document.getElementById('password-field');
const submit = document.getElementById('submit');
const outputField = document.getElementById('output');

const password$ = Rx.Observable.fromEvent(password, 'keyup')
      .map(({keyCode}) => keyCode - 48)
      .filter(value => 0 <= value && value <= 9);

const submit$ = Rx.Observable.fromEvent(submit, 'click');

Rx.Observable.combineLatest(
    password$
	.bufferTime(7000)
	.filter(R.compose(R.not, R.isEmpty))
      submit$
    )
    .take(10)
    .subscribe(
	([maybePassword]) => {
	    if (maybePassword.join('') === '1337') {
		outputField.innerHTML = 'Correct Password!';
	    } else {
		outputField.innerHTML = 'Wrong Password!';
	    }
	},
	err => {},
	() => outputField.innerHTML = 'No more tries accepted'
    );
