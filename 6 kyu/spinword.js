function spinWords(words){
    return words.split(" ").map(w=>
     {
     if(w.length>4)
      return w.split("").reverse().join("")
     else
      return w
     }).join(" ")
    }