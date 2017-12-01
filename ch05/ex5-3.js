Rx.Observable.merge(mouseUp$, touchEnd$)
    .subscribe(/* single observer to consume either event */);


mouseUp$.merge(touchEnd$)
    .subscribe(/* single observer to consume either event */);
