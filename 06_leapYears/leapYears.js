const leapYears = function(year) {
    //Check if the year is not divisble by 4 and return false
    if (Number.isInteger(year) && year > 0){
        if (year % 4 !== 0){
            return false;
        }
        //Check if the year is divisble by 100 but not 400
        else if(year % 100 === 0 && year % 400 !== 0){
            return false
        }
        else{
            return true;
        }
        //Return true
    }
};

// Do not edit below this line
module.exports = leapYears;
