function persistence(num) {
    let x = num.toString().split("")
    let i =0;
    while(x.length!=1){
    let y = x.reduce((product,i)=>i*product)
    x = y.toString().split("")
    i++
    }
    return i
  }