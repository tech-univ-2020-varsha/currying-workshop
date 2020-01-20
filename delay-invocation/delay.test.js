const delay = require('./delay');
describe('the unary function', () => {
    it('should return a function for a single input', () => {
        const func = delay(1);
        expect(typeof func).toBe('function');
    });

    it('should return a number on calling second function', () => {
        const result = delay(1)(2);
        expect(typeof result).toBe('number');
    });

    it('should return a sum of two inputs on calling second function', () => {
        const result = delay(1)(2);
        expect(result).toBe(3);
    })
})