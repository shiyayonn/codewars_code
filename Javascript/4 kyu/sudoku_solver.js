function validSolution(board){
    // validate rows
    console.log ('rows:')
    for (let row = 0; row < 9; row++) {
      console.log (board[row]);
      if (!validateSection(board[row])) return false;
    }
    // validate columns
    console.log ('columns:')
    for (let column = 0; column < 9; column++){
      let columnArray = [];
      for (let row = 0; row < 9; row++){
        columnArray.push(board[row][column]);
      }
      console.log(columnArray);
      if (!validateSection(columnArray)) return false;
    }
    // validate blocks
    console.log ('blocks:');
    for (let column = 0; column < 9; column += 3){
      for (let row = 0; row < 9; row += 3) {
        console.log (row + ', ' + column);
        console.log (getBlock(row, column, board));
        if (!validateSection (getBlock(row, column, board))) return false;
      }
    }
    return true;
  }
  
  function getBlock(row, column, board) {
    const array = [];
    for (c = 0; c < 3; c++) {
      for (r = 0; r < 3; r++) {
        array.push(board[row + r][column + c]);
      }
    }
    return array;
  }
  
  function validateSection(unsorted) {
    const sorted = unsorted.slice().sort();
    console.log (sorted);
    for (let i = 0; i < 9; i++) {
      if (sorted[i] != i + 1) return false;
    }
    return true;
  }