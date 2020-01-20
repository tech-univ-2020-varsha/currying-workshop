const callAndApply = require('./callAndApply');

describe('the call and apply function', () => {
    it('should have called the function using .call method', () => {
        let person = { name: 'Kishor', age: 28, tShirtSize: 'L' };

        var update = function (name, age, tShirtSize) {
            this.name = name;
            this.age = age;
            this.tShirtSize = tShirtSize;
        };
        update = jest.fn();

        callAndApply.caller(person, update, 'Sharma', 29, 'XL');

        expect(update).toHaveBeenCalledWith('Sharma', 29, 'XL');
    });

    it('should have called the function using .apply method', () => {
        let person = { name: 'Kishor', age: 28, tShirtSize: 'L' };

        var update = function (name, age, tShirtSize) {
            this.name = name;
            this.age = age;
            this.tShirtSize = tShirtSize;
        };
        update = jest.fn();

        callAndApply.applier(person, update, ['Sharma', 29, 'XL']);

        expect(update).toHaveBeenCalledWith('Sharma', 29, 'XL');
    });

})