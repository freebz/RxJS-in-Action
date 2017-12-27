describe('Average numbers', function () {
    it('Leak the variable total', function () {
	expect(verage([80, 90, 100])).to.be.equal(90);
    });
});
