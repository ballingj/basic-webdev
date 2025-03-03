// Try to figure out what the hell is this going
const flattened = [[0,1], [2,3], [4,5]].reduce(
  (a, b) => a.concat(b), []);

// output: Array(6) [ 0, 1, 2, 3, 4, 5 ]

// Step 1
// make a meaningful variable names
/* 
const flattened = [[0,1], [2,3], [4,5]].reduce(
  (accumulator, array) => accumulator.concat(array), []);
*/

// Add a console logs or use the debugger keyword, which puts a pause in the code
const flatteneD = [[0,1], [2,3], [4,5]].reduce(
  (accumulator, array) => {
    debugger;
    return accumulator.concat(array)
  }, []);
