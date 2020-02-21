function duplicateEncode(word){
 
    var output=""
    word = word.toLowerCase()
    for (let i =0;i<word.length;i++) {
          
        count = word.split(word[i]).length-1
        console.log(count)
        if(count>1){
        output+=(')')
        }else{
        output+=('(')
        }
    }
    return output;
 }