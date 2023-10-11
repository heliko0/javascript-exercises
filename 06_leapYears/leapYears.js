const leapYears = function(year) {
    // if (year % 400 === 0) return true;
    // // if year divisible by 4 and not a century year
    // else if (year % 4 === 0 && year % 100 !== 0) return true;
    // else return false;


    // return boolean result of (year divisible by 4 AND (year divisible by 400 OR year not a century year))
    // e.g. 1996 - divisible by 4 and not a century, 2000 - divisible by 4 and 400
    return year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0);
};

// Do not edit below this line
module.exports = leapYears;
