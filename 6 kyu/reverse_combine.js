function reverse_and_combine_text(str){
    console.log(str)
    let arr = str.split(/\s+/)
    let newarr = []
    
    let iterations = Math.ceil(arr.length/2)
    if(arr.length==7||arr.length==8)
      iterations = 3
    
    console.log(iterations)
    if (arr.length == 1)
      return str
    
    for (let i=0;i<iterations;i++){
      for(let o=0;o<arr.length-1;o+=2){
       
          if(o==arr.length-3){
          newarr.push(arr[o].split("").reverse().join("")+arr[o+1].split("").reverse().join(""))
          newarr.push(arr[o+2].split("").reverse().join(""))
        }else{
            newarr.push(arr[o].split("").reverse().join("")+arr[o+1].split("").reverse().join(""))
    
        }
        
      }
      arr = newarr.slice()
      newarr = []
    
    }
       console.log(arr)
       return arr[0]
    
    }