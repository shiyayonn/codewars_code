function iqTest(numbers){
    var num = numbers.split(" ")
    var even = num.filter(x=>x%2==0)
    var odd  = num.filter(x=>x%2==1)
    console.log(even)
    console.log(odd)
    return even.length>odd.length?num.indexOf(odd[0])+1:num.indexOf(even[0])+1
  }