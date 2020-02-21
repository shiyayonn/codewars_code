function validParentheses(parens){
 var x=0
  var arr = parens.split("")
  for(let i =0;i<arr.length;i++){
  if(arr[i]==='(')
    x++
  else if(arr[i]!='(')
    x--
    
  if(x<0)
    return false
  }
 return x==0
 
}