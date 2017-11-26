// Listing 4.2  Creating a simple animation with an RxJS timer

Rx.Observable.timer(1000)
  .subscribe(() =>
     document.querySelector('#panel').style.backgroundColor = 'red');
