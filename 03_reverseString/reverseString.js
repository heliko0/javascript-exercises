const reverseString = function (string) {
    let newString = []; //creates empty array for reversed letters to be added
    let seperate = string.split(""); //splits the given string into an array with individual letters

    for (value of seperate) { //value for each position up to the string length
        newString.unshift(value); // array newString each value added to the front, reversing the string
                                        
    }

    return newString.join(""); //once all instances finished, joins the array with no spaces. toString leaves commas.
};

// const reverseString = function (string) {            given solution, when did they mention reverse() though?
//     return string.split("").reverse().join("");
//   };     
  

// Do not edit below this line
module.exports = reverseString;
