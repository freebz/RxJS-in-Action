const newRandomNumber = () => Math.floor(Math.random() * 100);

const Money = function (currency, val) {
    return {
	value: function () {
	    return val;
	},
	currency: function () {
	    return currency;
	},
	toString: function () {
	    return `${currency} ${val}`;
	}
    };
};
