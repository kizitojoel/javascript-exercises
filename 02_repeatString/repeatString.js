const repeatString = function(input, num) {
    let returnString = "";
    if (num < 0){
        returnString += "ERROR";
    }
    else 
    {
        for (let i = 0; i < num; i++){
            returnString += input;
        }
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
