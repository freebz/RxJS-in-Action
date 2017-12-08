// Listing 6.9  Transaction class

class Transaction {
    constructor(name, type, amount, from, to = null) {
	this.name = name;
	this.type = type;
	this.from = from;
	this.to   = to;
	this.amount = amount;
    }
}
