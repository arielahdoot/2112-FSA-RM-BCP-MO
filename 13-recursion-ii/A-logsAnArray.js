// Print out all of the elements in an array

function logsAnArray(array) {
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    console.log(element);
  }
}

logsAnArray([1, [2, 3]]); // what if the input is nested?

/* consider the element variable declared on line 7. that could be a number, or it could be another array! */

/* if element is an array, we want to log every number inside of it. if only we had a function that takes an array and logs out all of its values! oh wait… we do!*/

// It's called logsAnArray!

// ----------------------------------------
// Adding recursion to logsAnArray
// ----------------------------------------

// Note: it's safe to run THIS code on pythontutor (http://pythontutor.com/javascript.html#mode=edit)

// function logsAnArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     let element = array[i];
    
//     if (Array.isArray(element)) {
//       // if the current element is an array, we need to recurse on that array
//       logsAnArray(element);
//     }
//     else {
//       // otherwise, just print out the element
//       console.log(element);
//     }
//   }
// }

// logsAnArray([1, [2, 3]]);

/*
Breakdown
---------
Step 1: Call logsAnArray([1, [2, 3]]), [1, [2, 3]] is passed in as the argument

Call Stack
----------
Top -> logsAnArray([1, [2, 3]])
--------------------------------

Step 2: 
i = 0, array = [1,[2,3]]
array[i] = 1, 1 is NOT an array -> base case, print out 1
-----------------------------------------
Step 3: 
i = 1, array = [1,[2,3]]
array[i] = [2,3], [2,3] IS an array -> recursive case, so we call logsAnArray([2,3])
-----------------------------------------

Step 4: Call logsAnArray([2,3])

Note: JS will execute whatever function is on the top of the stack. Now that logsAnArray([2,3]) is at the top of the call stack, logsAnArray([1,[2,3]])'s execution is PAUSED until logsAnArray([2,3]) completes its execution.

Call Stack
----------
Top -> logsAnArray([2,3])
2nd from top -> logsAnArray([1,[2,3]])
-------------------------------------------
Step 5: 
i = 0, array = [2,3]
array[i] = 2, 2 is NOT an array -> base case, print out 2
-------------------------------------------
Step 6: 
i = 1, array = [2,3]
array[i] = 3, 3 is NOT an array -> base case, print out 3
-------------------------------------------

Step 7: logsAnArray([2,3]) completes its execution

Call Stack
----------
Top -> logsAnArray(1,[2,3])

Note: Now that logsAnArray([2,3]) has completed its execution, logsAnArray(1,[2,3]) is now on top of the call stack once again, so its execution resumes.
-----------------------------------------

Step 8: logsAnArray([1,[2,3]]) completes its execution

Call Stack
----------
EMPTY
*/