function validate(password) {

    let lower = /[a-z]/
    let upper = /[A-Z]/
    let num = /[0-9]/
    let white = /\W/
    let alpha = /\w/
    
    console.log(password)
    return  !white.test(password)&&password.length>=6&&lower.test(password)&&upper.test(password)&&num.test(password)&&alpha.test(password)
  }