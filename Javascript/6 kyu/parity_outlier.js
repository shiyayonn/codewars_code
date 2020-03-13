function findOutlier(integers){
    let even = integers.filter(i=>i%2==0)
    let odd = integers.filter(i=>i%2!=0)
    return even.length>odd.length?odd[0]:even[0];
  }