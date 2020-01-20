const curry = require('./curry');
describe('the curry function', () => {

    it('should return the function to be curried', () => {
        function abc(a, b, c) {
            return a + b + c;
        }
        const curriedAbc = curry(abc);
        expect(typeof curriedAbc).toBe('function');
    });

    it('should check if the function is converted to curried', () => {
        function abc(a, b, c) {
            return a + b + c;
        }
        const curriedAbc = curry(abc);
        expect(curriedAbc(4)(3)(2)).toBe(9);
    });

    it('the curried function should return a func when the number of arg passed is less than the length of non-curried function ', () => {
        function abc(a, b) {
            return a + b;
        }
        const nonCurriedFuncLen = abc.length;
        const curriedAbc = curry(abc);
        expect(typeof curriedAbc(4)).toBe('function')
    });

    it('the curried function should return a func when when the number of arg passed is equal than the length of non-curried function ', () => {
        function abc(a, b, c) {
            return a + b + c;
        }
        const curriedAbc = curry(abc);
        expect(typeof curriedAbc(4)(3)).toBe('function');
    });
});