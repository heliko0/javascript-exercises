const sumAll = function (a, b) {
    let total = 0;
    let left = a;
    let right = b;

    if (left > right) {
        right = a;
        left = b;
    }

    if (left < 0 || right < 0 || Number.isInteger(left) === false || Number.isInteger(right) === false) return "ERROR";

    for (i = left; i <= right; i++) {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
