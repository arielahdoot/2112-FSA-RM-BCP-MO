/* arrays can contain any type of value, including other arrays */

/* an array that contains one or more arrays as an element is called a nested array */

let relatedThings = 
[
  ['Windows', 'MacOS'], 
  ['New York', 'Chicago']
];

console.log(relatedThings[0]);
// accessing the first element of the relatedThings array, which is the array ['Windows', 'MacOS']

console.log(relatedThings[1][0]);
// accessing the second element of the relatedThings array, which is the array ['New York', 'Chicago'], and THEN accessing the first element of that array, which is the string 'New York'

console.log(relatedThings.length);
// what is the length of the relatedThings array

/*
Notes:
--------

*/