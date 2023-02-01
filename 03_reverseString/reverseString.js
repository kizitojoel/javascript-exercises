const reverseString = function(str) {

// Split the string into an array of characters
    const reverse = [];
    for (character of str)
    {
        reverse.unshift(character);
    }
    return reverse.join("");

//Add the characters from the last index up to the first one to a string


//Return the new string

};

// Do not edit below this line
module.exports = reverseString;
