const expect = require('chai').expect;
var utils = require('../../utils/utils')

describe('Utils tests', function () {
    describe('Sieve algorithm', function () {
        it('Check prevalued arrays', function () {
            expect(utils.sieve(10)).to.eql([2, 3, 5, 7]);
            expect(utils.sieve(15)).to.eql([2, 3, 5, 7, 11, 13]);
            expect(utils.sieve(20)).to.eql([2, 3, 5, 7, 11, 13, 17, 19]);
        });
        it('Test against large value', function () {
            let sieveResult = utils.sieve(100000)
            expect(sieveResult.length).to.equal(9592);
        });

    })
    describe('Median algorithm', function () {
        it('Check prevalued arrays', function () {
            expect(utils.medians([2])).to.eql([2]);
            expect(utils.medians([2, 3])).to.eql([2, 3]);
            expect(utils.medians([2, 3, 5, 7])).to.eql([3, 5]);
            expect(utils.medians([2, 3, 5, 7, 11, 13, 17])).to.eql([7]);
        });
        it('Test large array', function () {
            let arr = [];
            for (let i = 0; i < 100000; i++) arr.push(i);
            expect(utils.medians(arr)).to.eqls([49999, 50000]);
        });
    })
});