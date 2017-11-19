// Multi-value, Asynchronous

const link = document.querySelector('#google');

const clickStream = Rx.Observable.fromEvent(link, 'click')
      .map(event => event.currentTarget.getAttribute('href'))
      .subscribe(console.log); //-> http://www.google.com
