function toCamelCase(str){

    return str.split(/[-_]/).map(function (item,index){
    if(index!=0)
      return item[0].toUpperCase()+ item.slice(1)
    else
      return item
    }
    ).join("")
    }