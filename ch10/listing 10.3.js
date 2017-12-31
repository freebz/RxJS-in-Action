// Listing 10.3  Simple banking form with checking text field and withdraw button

function handleClick (amount) {
    const { checking, savings } = store.getState();

    if(checking > amount) {
	store.dispatch(withdraw({amount, account: 'checking'}));
    }
    else {
	throw 'Overdraft error!';
    }
}

React.DOM.button({id: 'withdraw',
    onClick: () =>
        handleClick(document.getElementById('amount').value)},
'Withdraw');
