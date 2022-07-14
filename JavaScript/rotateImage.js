var rotate = function(matrix) {
  let columns = matrix.length;
  let rows = matrix[0].length;
  let orderedMatrix = [];
  for (let i = 0; i < rows; i++) {
    for (let j = columns - 1; j >= 0; j--) {
      orderedMatrix.push(matrix[j][i]);
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = orderedMatrix.shift();
    }
  }
  return matrix;
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));