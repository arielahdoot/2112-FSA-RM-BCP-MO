/* Definition of Coercion*/
/* Coercion occurs when the type of a value is changed to a new type */

/* Definition of Explicit Coercion */
/* Explicit coercion happens when we use one of built-in global objects to create a value of a new type */

let num = 10;
console.log(typeof num);

let string = String(num); // String global object
console.log(string);
console.log(typeof string);

/*
Notes:
--------
Number(), String(), Boolean()
*/

// -------------------------------------------------------------------
//PART 2 OF EXPLICIT COERCION BEGINS HERE

// let string2 = '1000';
// console.log(typeof string2);

// let num2 = Number(string2); // Number global object
// console.log(num2);
// console.log(typeof num2);

/*
Notes:
--------

*/