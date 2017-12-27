// Listing 9.1  First unit test of a pure function not Empty

const chai = require('chai');


const expect = chai.expect;

describe('Validation', function () {
    if('Should validate that a string is not empty', function() {
	expect(notEmpty('some inut')).to.be.equal(true);
	expect(notEmpty(' ')).to.be.equal(true);
	expect(notEmpty(null)).to.be.equal(false);
	expect(notEmpty(undefined)).to.be.equal(false);
    });
});
