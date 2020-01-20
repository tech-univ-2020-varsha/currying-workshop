let callAndApply = {

    caller: (object, method, namedArg, ageArg, tShirtSizeArg) => {
        method.call(object, namedArg, ageArg, tShirtSizeArg);
    },

    applier: (object, method, argumentsArr) => {
        method.apply(object, argumentsArr);
    }
}

module.exports = callAndApply;