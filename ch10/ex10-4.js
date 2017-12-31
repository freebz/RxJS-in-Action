function createStreamFromStore(store) {
    return Rx.Observable.from(store)
	.map(() => store.getState())
	.publishBehavior(store.getState())
	.refCount();
}



function shouldWithdraw(payload) {
    function (dispatch) => {
	if (payload.done) {
	    return dispatch(withdraw(payload));
	}
    }
}



interface Subject extends Observable implements Subscription {

}
