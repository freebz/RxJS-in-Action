// Listing 6.13  The Account class

class Account {
    constructor(id, name, type, balance) {
	this._id = id;
	this.name = name;
	this.type = type;
	this.balance = balance;
    }

    get id() {
	return this._id;
    }
}
