...
.retryWhen(error$ =>
    Rx.Observable.range(1, maxRetries)
      .zip(errors$, (i, err) => ({'i': i, 'err': err}))
      .mergeMap(({i, err}) =>
	Rx.Observable.if(() => i <= maxRetries - 1,
	   Rx.Observable.timer(i * 1000)
	     .do(() => console.log(`Retrying after ${i} second(s)...`)),
	   Rx.Observable.throw(err))
      )
)
...



const lastUpdate = document.querySelector('#last-updated');

const updateSubscription = twoSecond$.subscribe(() => {
    lastUpdate.innerHTML = new Date().toLocaleTimeString();
});
