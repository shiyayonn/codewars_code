function pigIt(str){
    let reg = new RegExp(/\W/)
    var arr = str.split(" ")
    console.log(reg.test("!!!"))
    var newarr = []
    for (var i=0;i<arr.length;i++ ){
       console.log(arr[i])
      if(reg.test(arr[i]))
        newarr.push(arr[i])
      else{
        newarr.push(arr[i].substring(1,arr[i].length)+arr[i].charAt(0)+"ay")
      }
    }
   // console.log(newarr)
    return newarr.join(" ")
  }