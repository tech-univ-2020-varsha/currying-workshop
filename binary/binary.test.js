const binary = require('./binary');

describe('the binary function', () => {
    it('should return a number when two arguments are passed', () => {
        const result = binary(1, 2);
        expect(typeof result).toBe('number');

    });

    it('should return the sum of two arguments', () => {
        const result = binary(1, 2);
        expect(result).toBe(3);
    });
});

describe('the binary function implemented using currying', () => {

    it('should return the function when one argument is passed', () => {
        const func = binary(1);
        const result = func(2);
        expect(typeof func).toBe('function');
    });

    it('should return the sum on calling the second function', () => {
        const func = binary(1);
        const result = func(2);
        expect(result).toBe(3);
    });


});