/* 
.splice mutates the original array
it's used to add or remove elements from the middle of an array (instead of adding or removing from either end) 
*/

/* 
its first argument is an index
the second argument is a count of elements to delete from the array, starting at the provided index (the first argument)
*/

/* 
it returns a new array with all of the removed elements 
*/

// let names = ['George', 'John', 'Thomas'];

// // in this example, we're saying that we want to remove 1 element, starting from index 1, and store that removed element (and any other removed elements if applicable) in an array with name singleTermPresidents
// let singleTermPresidents = names.splice(1, 1);

// console.log(names);
// console.log(singleTermPresidents);

/*
Notes:
--------

*/

//----------------------------------
// SPLICE PART 2 - Another example
//----------------------------------

// let names = ['Paul', 'George', 'John', 'Ringo'];

// let acrossTheUniverse = names.splice(1, 2);

// console.log(names);
// console.log(acrossTheUniverse);

/*
Notes:
--------

*/

//----------------------------------
// SPLICE PART 3 - add elements
//----------------------------------

/* you can optionally add new elements at the given index */

// let names = ['Paul', 'George', 'Pete', 'John'];

// // in this example, we're saying that we want to remove 1 element, starting from index 2, and store that removed element (and any other removed elements if applicable) in an array with name formerMembers. But we ALSO want to add an element with value 'Ringo' into index 2 of the original names array.
// let formerMembers = names.splice(2, 1, 'Ringo');

// console.log(names);
// console.log(formerMembers);

/*
Notes:
--------

*/

//-------------------------------------
// SPLICE PART 4 - add elements part 2
//-------------------------------------

/* you don't have to remove any elements if you want to add elements! */

let names = ['Paul', 'George', 'Ringo', 'John'];

// notice the 2nd argument is a 0, meaning that we don't want to remove any elements in this .splice() call, but we are adding the elements 'Pete' and 'Stuart'
let removedElements = names.splice(2, 0, 'Pete', 'Stuart');

console.log(names);
console.log(removedElements);

/*
Notes:
--------

*/