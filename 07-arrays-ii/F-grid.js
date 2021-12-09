/* the best way to represent a grid/matrix in code is to use nested arrays */

/* the inner arrays will represent the rows of the grid */

/* each index of the rows represents a column */

let grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let firstRow = grid[0];
console.log(firstRow);

let firstColumn = 
[grid[0][0], grid[1][0], grid[2][0]];

console.log(firstColumn);

console.log(grid[1][2]); // which element do you think will be printed out here?

/*
Notes:
--------

*/