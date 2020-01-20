function binary(...args) {
    if (args.length == 2)
        return args[0] + args[1];
    else return function add2(num2) {
        return (args[0] + num2);
    }

}

module.exports = binary;