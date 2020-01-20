function delayInvoc(num1) {
    return function delay1(num2) {
        return (num1 + num2);
    }
}

module.exports = delayInvoc;