// Listing 10.9  Building the application

const Balances = React.createClass({/**/});

const accounts =
      checking: 00, savings: 100
};

const epics = [
    transactionLogEpic
    /* add more epics here */
];

const store = createStore(updateAccounts, accounts);

const state$ = createStreamFromStore(store);

const middleware = createMiddleware(store, epics);

ReactDOM.render(
    React.createElement(Balances,
	{appState$: state$, dispatch: middleware.dispatch}),
    document.getElementById('root')
);
