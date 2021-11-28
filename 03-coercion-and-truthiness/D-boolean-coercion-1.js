// Values can be coerced to boolean values, too

let newBool = Boolean('i am a string'); // Boolean global object

console.log(newBool); // will this be true or false?

/*
Notes:
--------

*/

// -------------------------------------------------------------------
//PART 2 OF BOOLEAN COERCION: TRUTHINESS BEGINS HERE

/* when coercing a value to boolean, JS uses rules to decide if a value should be coerced to true or false */

/* values coerced to true are called "truthey" */

/* values coerced to false are called "falsey" */

/*
Notes:
--------

*/

// -------------------------------------------------------------------
//PART 3 OF BOOLEAN COERCION: TRUTHINESS BEGINS HERE

/* Most values are truthy */

// console.log(Boolean('i am a string')) // strings of length > 0 are truthy

// console.log(Boolean(10)); // any non-zero number is truthy  

// console.log(Boolean(['i', 'am', 'an', 'array'])); // all arrays are truthy 

// console.log(Boolean({
// i: 'am',
// an: 'object'
// })); // all objects are truthy

/*
Notes:
--------

*/

// -------------------------------------------------------------------
//PART 4 OF BOOLEAN COERCION: TRUTHINESS BEGINS HERE

/* These are the only falsey values */

// console.log(Boolean('')) // empty string

// console.log(Boolean(0));

// console.log(Boolean(null));

// console.log(Boolean(undefined));

// console.log(Boolean(NaN));

/*
Notes:
--------

*/
