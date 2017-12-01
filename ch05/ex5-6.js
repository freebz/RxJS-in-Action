Rx.Observable.concat(mouseUp$.take(50), touchEnd$)
    .subscribe(event => console.log(event.type));
