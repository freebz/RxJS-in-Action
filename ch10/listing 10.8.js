// Listing 10.8  Building your middleware

function createMiddleware(store, epics) {

    const input$ = new Rx.Subject();

    const actions =
	  epics.map(epic =>
		    epic(input$, store));

    const combinedActions$ = Rx.Observable
	  .merge(...actions)
	  .publish();

    
    combinedActions$.subscribe(input$);

    combinedActions$.subscribe(action => store.dispatch(action));

    const sub = combinedActions$.connect();

    return {
	dispacth:    (action) => input$.next(action),
	unsubscribe: () => sub.unsubscribe()
    };
}
