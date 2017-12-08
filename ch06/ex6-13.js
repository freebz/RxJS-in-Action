const accounts = [
    new Account('1', 'Emmet Brown', 'savings', 1000),
    new Account('2', 'Emmet Brown', 'checking', 2000),
    new Account('3', 'Emmet Brown', 'CD', 20000),
];


const accountsDb = new PounchDB('accounts');
