let curry = (abcFunc) => {
    let argumentLength = abcFunc.length;
    return function curiedFunc(...args) {
        if (args.length == argumentLength)
            return abcFunc(...args);
        else
            return curiedFunc.bind(null, ...args);
    }
}

module.exports = curry;