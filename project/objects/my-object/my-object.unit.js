import myObject from '../../objects/my-object/my-object';

describe('My Object', function () {
	it('return a string', function () {
		expect(myObject('teststring')).to.be.equal('teststring!');
	})
});