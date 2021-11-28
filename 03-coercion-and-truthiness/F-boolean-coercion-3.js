/* The ! (aka bang) operator coerces a value to a boolean value that's opposite of its truthiness (that's why ! is also called the not operator) */

console.log(!true); // !Boolean(true)

console.log(!'abc'); // !Boolean('abc')

console.log(!100);

console.log(!['an', 'array']);

console.log(!{an: 'object'});


//Formula

 // !(x) => !Boolean(x), where x is any value

/*
Notes:
--------

*/

// -------------------------------------------------------------------
//PART 2 OF BOOLEAN COERCION: ! AND !! OPERATORS BEGINS HERE

/* You can use !! (aka double bang) to explicitly coerce a value to a boolean value that reflects its truthiness (that's why !! is also called the not not operator) */

// console.log(!!true);

// console.log(!!'abc');

// console.log(!!100);

// console.log(!!['an', 'array']);

// console.log(!!{an: 'object'});

/*
Formula
---------
 // !!(x) => Boolean(x), where x is any value
 // it's essentially shorthand for explicit Boolean coercion
*/


// let isThisTruthey = !!5;
// console.log(isThisTruthey);

// let isLogin = !!username;