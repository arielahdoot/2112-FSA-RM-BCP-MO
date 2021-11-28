/* Recall how a conditional expression works in an if statement */

// Keeping in mind how if-else blocks work: if the expression below evaluates to true, the if block will run, otherwise, the else block will run

// What if the conditional expression evaluates to a non-boolean value?

// what do you think the output will be?

// Example with a number
if (5) { // if(Boolean(5) === true)
  console.log('in the if'); 
}
else {
  console.log('in the else');
}

// Example with a string
if ('apples') {  // if(Boolean('apples') === true)
  console.log('in the if');
}
else {
  console.log('in the else');
}

/*
Notes:
--------

*/

// -------------------------------------------------------------------
//PART 2 OF BOOLEAN COERCION: CONDITIONALS BEGINS HERE

/* JS will implicitly coerce the result of an expression in a conditional to a boolean value */

// if (10) { // if(Boolean(10) === true)
//   console.log('yes');
// }
// else {
//   console.log('no');
// }


// if (0) { // if(Boolean(0) === true)
//   console.log('yes');
// }
// else {
//   console.log('no');
// }


/*
Notes:
--------

*/