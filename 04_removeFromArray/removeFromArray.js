const removeFromArray = function() {
    const args = Array.from(arguments);
    originalList = args.shift();
    //For all args[1] to args[args.length - 1], remove instances of the args from the originalList
    for (arg of args){
        
        while (originalList.includes(arg)){
            // Finds the index of the value to be removed in the original list
            removeIndex = originalList.findIndex(function(x){return x === arg});

            //removes the occurences of the arg in the originalList
            originalList.splice(removeIndex, 1);
        }     
    }
    return originalList;
};

// Do not edit below this line
module.exports = removeFromArray;
