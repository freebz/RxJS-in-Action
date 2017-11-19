//1
Stream.range(1, Number.POSITIVE_INFINITY)
    .take(100)
    .subscribe(console.log);
//2
Stream.fromEvent('mousemove')
    .map(e => [e.clientX, e.clientY])
    .subscribe(consoel.log);
