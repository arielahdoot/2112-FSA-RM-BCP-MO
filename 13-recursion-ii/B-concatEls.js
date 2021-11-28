// Take an array of elements(letters), and concatenate them together
//['a', 'b', 'c'] ⇒ abc
 
function concatEls(array) {
  let finalString = '';
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    finalString += element;
  }
  return finalString;
}

let result = concatEls(['a', 'b', 'c']);
console.log(result);

// ---------------------------------------
// Introducing Nested Arrays
// ---------------------------------------

// Now what if there were nested arrays involved?
// For example: //['a', ['b', 'c']] ⇒ abc

/* 
so what we need to include now is an implementation for what happens when an element of an array is an array in itself
*/

// Note: it's safe to run THIS code on pythontutor (http://pythontutor.com/javascript.html#mode=edit)
// function concatEls(array) {
//   let finalString = '';
//   for (let i = 0; i < array.length; i++) {
//     let element = array[i];
//     if (Array.isArray(element)) {
//       finalString += concatEls(element);
//       // If the element is an array, then we want to recurse on that array element, concatenate all of that array's elements, and add the result to finalString 
//     } else {
//       finalString += element;
//     }
//   }
//   return finalString;
// }
// let result = concatEls(['a', ['b', 'c']]);
// console.log(result);

/*
Breakdown
---------
Step 1: Call concatEls(['a', ['b', 'c']]), 
['a', ['b', 'c']] is passed in as the argument

Call Stack
----------
Top -> concatEls(['a', ['b', 'c']])
--------------------------------

Step 2: 
i = 0, array = ['a', ['b', 'c']], finalString = ''
array[i] = 'a', 'a' is NOT an array -> base case, finalString += 'a', therefore finalString = 'a'
-----------------------------------------
Step 3: 
i = 1, array = ['a', ['b', 'c']]
array[i] = [b,c], [b,c] IS an array -> recursive case, so we call concatEls(['b', 'c'])
-----------------------------------------

Step 4: Call concatEls(['b', 'c'])

Note: JS will execute whatever function is on the top of the stack. Now that concatEls(['b', 'c']) is at the top of the call stack, 
concatEls(['a', ['b', 'c']])'s execution is PAUSED until concatEls(['b', 'c'])  completes its execution.

Call Stack
----------
Top -> concatEls(['b','c']) 
2nd from top -> concatEls(['a', ['b','c']])
-------------------------------------------
Step 5: 
i = 0, array = ['b','c'], finalString = ''
array[i] = 'b', 'b' is NOT an array -> base case, finalString += 'b' => therefore finalString = 'b'
-------------------------------------------
Step 6: 
i = 1, array = ['b','c'], finalString = 'b'
array[i] = 'c', 'c' is NOT an array -> base case, finalString += 'c' => therefore finalString = 'bc'

Step 6.5:
We return finalString ('bc'), and therefore 
concatEls(['b','c']) completes its execution

Call Stack
----------
Top -> concatEls(['a', ['b', 'c']])

-------------------------------------------
Note: we are currently back in concatEls(['a', ['b', 'c']]), so parameter array = ['a', ['b', 'c']], and variable finalString = 'a'

Step 7: the previous return value of 'bc' is concatenated with the current value stored in finalString, and its resulting value is stored in finalString

finalString += 'bc' => 'a' + 'bc' => therefore finalString = 'abc'

Step 7.5: we return finalString ('abc'), and therefore concatEls(['a', ['b', 'c']]) completes its execution

Call Stack
----------
EMPTY
*/
