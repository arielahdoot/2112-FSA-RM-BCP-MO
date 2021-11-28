/* 
implicit coercion also changes the type of a value 
*/

/* Definition of Implicit Coercion */
/* unlike explicit coercion, implicit coercion is something that JavaScript does for us, behind the scenes, as opposed to being something that we explicitly change in the code */

/* this behavior can be very helpful, but it's important to understand how it works so we can anticipate what our code will do */

// Implicit coercion: +

let sum = 10 + 20;

let concatenatedString = '10' + '20'; // '1020'

let notSure = 10 + '20'; // will this throw an error? return a value?

console.log('sum', sum);
console.log('concatenatedString:', concatenatedString);
console.log('notSure:', notSure); 

/*
Notes:
--------

*/

// -------------------------------------------------------------------
//PART 2 OF IMPLICIT PLUS BEGINS HERE

/* where does 1020 come from? note it's the same value as concatenating '10' and '20' */

/* the + operator will implicitly coerce a number to a string if you try to 'add' it to a string */  

// let willBeAString = '10' + 20 + 30 + 40 + 50;
// console.log(willBeAString);
// console.log(typeof willBeAString);

/*
Notes:
--------

*/

// -------------------------------------------------------------------
//PART 3 OF IMPLICIT PLUS BEGINS HERE

/* 
the + operator will implicitly coerce a number to a string if you try to 'add' it to a string 
*/  

/* 
Note that we're bringing up the + sign specifically because the + sign allows for concatenation in strings.
This rule doesn't necessarily apply to other operators such as the - sign.
*/

/* 
Numbers added together will return another number, but once you try to add a number to a string, the number will coerced into a string before anything else happens 
*/ 

// let alsoAString = 10 + 20 + 30 + 40 + '50' + (24 + 26);
// // 10 + 20 + 30 + 40 = 100
// // 100 + '50' => '100' + '50' = '10050'
// // '10050' + '50' => '1005050'
// console.log(alsoAString);
// console.log(typeof alsoAString);

/*
Notes:
--------

*/
