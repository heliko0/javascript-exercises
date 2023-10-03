const removeFromArray = function (ary, ...removes) {
    // return ary.filter(section => section !== remove) The filter() method processes each element in the ary array and includes only the elements for which the callback function returns true. Elements that are equal to the remove value are filtered out (excluded).

    //     let newAry = [];

    //     for (value of ary) {
    //         for (remove of removes){
    //         if (value !== remove)
    //         newAry.push(value);
    //         }
    //     }

    //     return newAry;
    // };

    for (remove of removes) {                              // for each remove given in removes
        const removeIndex = ary.indexOf(remove);           // finds the index (if present) 
        if (removeIndex >= 0) ary.splice(removeIndex, 1);  // splice takes 2 parameters, position and number of values to remove. needs if statement to ignore non present vals
    }

    return ary;

    // ary.forEach ((remove) => {                            // this code does not work, not sure why. looks to be the same as for of?
    //     const removeIndex = ary.indexOf(remove);           
    //     if (removeIndex >= 0) ary.splice(removeIndex, 1);  
    // });

    // return ary;
};

// Do not edit below this line
module.exports = removeFromArray;
