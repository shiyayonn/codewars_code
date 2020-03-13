var moveZeros = function (arr) {

    return [...arr.filter(x=>x!==0),...arr.filter(x=>x===0)]
    
    }