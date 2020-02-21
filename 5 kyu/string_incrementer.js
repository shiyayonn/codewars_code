function incrementString (strng) {
    const np = /\d+/g;
   
    if(strng.match(np))
    {
    var num = strng.match(np)
   
    var numarr = num[0].split("")
    var nlength = numarr.length
    console.log(nlength)
    
    var add = parseInt(num)+1
    var alength = add.toString().length
    console.log(alength)
    if(alength<nlength)
      {
        for(let i =0;i<nlength-alength;i++){
          add = "0"+ add
          console.log(i)
        }
      }
     console.log(add)
    var out = strng.replace(np,add.toString())
    return out
    }
    else{
      var arr = strng.split("")
      arr.push(1)
      return  arr.join("")
      }
   }