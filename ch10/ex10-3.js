const mathReducer = (state = {
    result: 0
}, action) => {
    switch(action.type) {
    case 'ADD':
	return {
	    ...state, result: state.result + action.value
	};
    case 'SUBTRACT':
	return {
	    ...state, result: state.result - action.value
	};
    default:
	return state;
    }
};



const store = createStore(mathReducer, 0);



const accounts = {
    checking: 100,
    savings: 100
};



const updateAccounts(state = {
    checking: 0,
    savings: 0
}, action) => {
    switch (action.type) {
    case 'WITHDRAW'
	return { //#B
	    ...state,
	    [action.account]: state[action.account] -
		parseFloat(action.amount)
	};
    case 'DEPOSIT':
	return {
	    ...state,
	    [action.account]: state[action.account] +
		parseFloat(action.amount)
	};
    default:
	return state;
    }
});



const withdraw = {
    type: 'WITHDRAW',
    amount: 50,
    account: 'checking'
};

const newAccounts = updateAccounts(accounts, withdraw);



const store = createStore(updateAccounts, accounts);



function withdraw(payload) {
    return {type: 'WITHDRAW', ...payload};
}

const action = withdraw({amount: 50, account: 'checking'});
store.dispatch(action);
store.getState(); //-> {checking: 50, savings: 100}
