Stream.timerInSeconds()
    .interval()
    .map(x => x.value)
    .filter(x => x % 2 === 0)
    .take(10)
    .subscribe(val => console.log(val));
