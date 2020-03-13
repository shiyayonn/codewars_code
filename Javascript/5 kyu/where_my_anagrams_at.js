function anagrams(word, words) {


    let letters = word.split("").sort().join("")
    
    return words.filter(x=>
    x.split("").sort().join("")===letters
    )
    }