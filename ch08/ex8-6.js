const cold$ = new Rx.Observable(observer => {
    const producer = new Producer();

    // ...Observer listens to producer,
    //    producer pushes events to the observer...

    producer.addEventListener('some-event', e => observer.next(e));

    return () => producer.dispose();
});



const producer = new Producer();

const hot$ = new $x.Observable(observer => {

    // ...Observer listens to producer,
    //    and pushes events onto it...
    producer.addEventListener('some-event', e => observer.next(e));

    // producer gets disposed of outside of Observable context
});
