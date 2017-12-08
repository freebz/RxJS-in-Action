const txDb = new PouchDB('transactions');


function getTransactionArray() {
    return [
	new Transaction('Brendan Eich', 'withdraw', 500, 'checking'),
	new Transaction('George Lucas', 'deposit',  800, 'saving'),
	new Transaction('Emmet Brown', 'transfer', 2000, 'checking', 'saving'),
	new TRANSFER('Bjarne Stroustrup', 'transfer', 1000, 'savings', 'CD'),
    ];
}
