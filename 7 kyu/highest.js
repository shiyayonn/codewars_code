function highAndLow(numbers){
    let arr = numbers.split(" ")
    var h = -100000;
  
    var l = Number.MAX_VALUE;
  
    
    arr.map(item=>{
    if(parseInt(item)>h)
      h = item
    if(parseInt(item)<l)
      l = item
    })
    
    return (h+" "+l)
  }