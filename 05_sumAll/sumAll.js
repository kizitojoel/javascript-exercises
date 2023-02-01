const sumAll = function(start, stop) {
    let sumAll = 0;
    //Checks if start and stop are positive integers
    if ((Number.isInteger(start) && Number.isInteger(stop)) && (start >= 0 && stop >= 0)){
        for(let i = Math.min(start, stop); i <= Math.max(start, stop); i++){
            sumAll += i;
        }
        return sumAll;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
