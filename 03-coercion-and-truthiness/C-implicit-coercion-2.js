// Using the == operator is weird

console.log(10 == 10);
console.log(10 == '10');
console.log('true' == true);
console.log('' == false);
console.log(true == '1');

/*
Notes:
--------

*/

// -------------------------------------------------------------------
//PART 2 OF IMPLICIT EQUALS BEGINS HERE

/*
Results of the above console.logs:
-----------------------------------
10 == 10; // => true, makes sense
10 == '10'; // => true, also makes sense
'true' == true; // => false, kinda weird
'' == false; // => true, kinda weird
true == '1'; // => true, kinda weird*
*/

/*
TL;DR: avoid using the == operator, because it uses a large set of rules to implicitly coerce values to the same type before comparing them. 
*/