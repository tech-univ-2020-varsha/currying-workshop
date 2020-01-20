const longDelay = require('./longDelay');

describe('the long delay function', () => {
    it('should return 0 when no arguments passed to the function', () => {
        const result = longDelay();
        expect(result).toBe(0);
    });

    it('should return a function for argument passed', () => {
        const result = longDelay(1);
        expect(typeof result).toBe('function');
    });

    it('should return the total when no arguments passed', () => {
        const result = longDelay(1)(2)();
        expect(result).toEqual(4);
    });


})