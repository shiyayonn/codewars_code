function dirReduc(dirs){
    for(var i=0;i<dirs.length;i++){
      if( dirs[i] === "NORTH" && dirs[i+1] === "SOUTH"){
        dirs.splice(i, 2);
        i-=2;
        continue;
      }
      if( dirs[i] === "EAST" && dirs[i+1] === "WEST"){
        dirs.splice(i, 2);
        i-=2;
        continue;
      }
      if( dirs[i] === "SOUTH" && dirs[i+1] === "NORTH"){
        dirs.splice(i, 2);
        i-=2;
        continue;
      }
      if( dirs[i] === "WEST" && dirs[i+1] === "EAST"){
        dirs.splice(i, 2);
        i-=2;
        continue;
      }
    }
    
    return dirs;
  }