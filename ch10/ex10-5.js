function simpleReducer(state, action) {
    switch(action.type) {
    case 'LOG':
	return {...state, messages: [...action.payload, 'in Redux!']};
    default:
	return state;
    }
}

const store = createStreamFromStore(
    createStore(simpleReducer, {messages: []}));
const observableStore = createStreamFromStore(store);

observableStore.subscribe(({messages}) => console.log(messages.join('=>')));

function simpleEpic(action$, store) {
    return action$.ofType('LOG')
	.delay(1000)
	.map(action => {...action, payload: [...action.payload, 'inFx!']});
}

const disposableDispatcher = createMiddleware(store, [simpleEpic]);

disposableDispatcher.dispatch({
    type:     'LOG',
    payload: ['Hello']
});
