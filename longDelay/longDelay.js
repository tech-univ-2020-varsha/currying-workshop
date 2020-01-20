
let total = 0;
function longDelay(num) {
    if (num === undefined)
        return total;
    else {
        total += num;
        return longDelay;
    }

}

module.exports = longDelay;