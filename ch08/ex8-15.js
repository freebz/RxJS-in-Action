interface ConnectableObservable<T> extends Observable<T> {
    connect() : Subscription
    refCount() : Observable<T>
}




publishReplay(bufferSize = Number.POSITIVE_INFINITY,
	      windowTime = Number.POSITIVE_INFINITY)
