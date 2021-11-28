/* working with nested objects is very similar to working with nested arrays */

// use a for-in loop to iterate through the object 

/* 
if the value is another object, recursively call the function on the nested object 
*/

/* write a function sumVals that sums the values in an object */

function sumVals(obj) {
  let sum = 0;
  for (let key in obj) {
    let value = obj[key];
    sum += value;
  }
  return sum;
}

let result = sumVals({a: 10, b: 20});
console.log(result);

// ---------------------------------------
// Introducing Nested Arrays
// ---------------------------------------

// Now what if there were nested objects involved?
// For example: 
//{a: 1, b: {c: {d: {e:2, f: 3}}}} ⇒ 1 + 2 + 3 = 6

/* 
so what we need to include now is an implementation for what happens when an value of an object is an object in itself
*/

// Note: it's safe to run THIS code on pythontutor (http://pythontutor.com/javascript.html#mode=edit)
// function sumVals(obj) {
//   let sum = 0;
//   for (let key in obj) {
//     let value = obj[key];
//     if (typeof value === 'object') {
//     // If the value is an object, then we want to recurse on that value, sum up all of that array's values, and add the result to sum 
//       sum += sumVals(value)
//     } else {
//       sum += value;
//     }
//   }
//   return sum;
// }

// let result = sumVals({a: 1, b: {c: {d: {e:2, f: 3}}}})
// console.log(result);

/*
Breakdown
---------
Step 1: Call sumVals({a: 1, b: {c: {d: {e:2, f: 3}}}}), 
{a: 1, b: {c: {d: {e:2, f: 3}}}} is passed in as the argument

Call Stack
----------
Top -> sumVals({a: 1, b: {c: {d: {e:2, f: 3}}}})
--------------------------------
Step 2: 
key = a, obj = {a: 1, b: {c: {d: {e:2, f: 3}}}}, sum = 0
obj[key] = 1, 1 is NOT an object -> base case, sum += 1, therefore sum = 1
-----------------------------------------
Step 3: 
key = b, obj = {a: 1, b: {c: {d: {e:2, f: 3}}}}, sum = 1
obj[key] = {c: {d: {e:2, f: 3}}}, 
{c: {d: {e:2, f: 3}}} IS an object -> recursive case, so we call sumVals({c: {d: {e:2, f: 3}}})
-----------------------------------------

Step 4: Call sumVals({c: {d: {e:2, f: 3}}})

Note: JS will execute whatever function is on the top of the stack. Now that sumVals({c: {d: {e:2, f: 3}}}) is at the top of the call stack, 
sumVals({a: 1, b: {c: {d: {e:2, f: 3}}}})'s execution is PAUSED until sumVals({c: {d: {e:2, f: 3}}})  completes its execution.

Call Stack
----------
Top -> sumVals({c: {d: {e:2, f: 3}}})
2nd from top -> sumVals({a: 1, b: {c: {d: {e:2, f: 3}}}})
-------------------------------------------
Step 5: 
key = c, obj = {c: {d: {e:2, f: 3}}}, sum = 0
obj[key] = {d: {e:2, f: 3}}, 
{d: {e:2, f: 3}} IS an object -> recursive case, so we call sumVals({d: {e:2, f: 3}})
-------------------------------------------
Step 6: Call sumVals({d: {e:2, f: 3}})

Note: JS will execute whatever function is on the top of the stack. Now that sumVals({d: {e:2, f: 3}}) is at the top of the call stack, 
sumVals({c: {d: {e:2, f: 3}}})'s execution is PAUSED until sumVals({d: {e:2, f: 3}}) completes its execution.

Call Stack
----------
Top -> sumVals({d: {e:2, f: 3}})
2nd From Top -> sumVals({c: {d: {e:2, f: 3}}})
3rd from top -> sumVals({a: 1, b: {c: {d: {e:2, f: 3}}}})
---------------------------------------
Step 7: 
key = d, obj = {d: {e:2, f: 3}}, sum = 0
obj[key] = {e:2, f: 3}, 
{e:2, f: 3} IS an object -> recursive case, so we call sumVals({e:2, f: 3})
-----------------------------------------
Step 8: Call sumVals({e:2, f: 3})

Note: JS will execute whatever function is on the top of the stack. Now that sumVals({e:2, f: 3}) is at the top of the call stack, 
sumVals({d: {e:2, f: 3}})'s execution is PAUSED until sumVals({e:2, f: 3}) completes its execution.

Call Stack
----------
Top -> sumVals({e:2, f: 3})
2nd From Top -> sumVals({d: {e:2, f: 3}})
3rd From Top -> sumVals({c: {d: {e:2, f: 3}}})
4th from top -> sumVals({a: 1, b: {c: {d: {e:2, f: 3}}}})
-----------------------------------------
Step 9: 
key = e, obj = {e:2, f: 3}, sum = 0
obj[key] = 2, 2 is NOT an object -> base case, sum += 2, therefore sum = 2
--------------------------------
Step 10: 
key = f, obj = {e:2, f: 3}, sum = 2
obj[key] = 3, 3 is NOT an object -> base case, sum += 3, therefore sum = 5

Step 10.5:
We return sum (5), and therefore sumVals({e:2, f: 3}) completes its execution

Call Stack
----------
Top -> sumVals({d: {e:2, f: 3}})
2nd From Top -> sumVals({c: {d: {e:2, f: 3}}})
3rd From Top -> sumVals({a: 1, b: {c: {d: {e:2, f: 3}}}})
--------------------------------------
Note: we are currently back in sumVals({d: {e:2, f: 3}}), so parameter obj = {d: {e:2, f: 3}}, and variable sum = 0

Step 11: the previous return value of 5 is added to the current value stored in sum, and its resulting value is stored in sum

sum += 5 => 0 + 5 => therefore sum = 0

Step 11.5: we return sum (5), and therefore 
sumVals({d: {e:2, f: 3}}) completes its execution

Call Stack
----------
Top -> sumVals({c: {d: {e:2, f: 3}}})
2nd From Top -> sumVals({a: 1, b: {c: {d: {e:2, f: 3}}}})
-------------------------------------------
Note: we are currently back in 
sumVals({c: {d: {e:2, f: 3}}}), so parameter 
obj = {c: {d: {e:2, f: 3}}}, and variable sum = 0

Step 11: the previous return value of 5 is added to the current value stored in sum, and its resulting value is stored in sum

sum += 5 => 0 + 5 => therefore sum = 0

Step 11.5: we return sum (5), and therefore 
sumVals({c: {d: {e:2, f: 3}}}) completes its execution

Call Stack
----------
Top -> sumVals({a: 1, b: {c: {d: {e:2, f: 3}}}})
-------------------------------------------
Note: we are currently back in 
sumVals({a: 1, b: {c: {d: {e:2, f: 3}}}}), so parameter 
obj = {a: 1, b: {c: {d: {e:2, f: 3}}}}, 
and variable sum = 1

Step 11: the previous return value of 5 is added to the current value stored in sum, and its resulting value is stored in sum

sum += 5 => 1 + 5 => therefore sum = 6

Step 11.5: we return sum (6), and therefore 
sumVals({a: 1, b: {c: {d: {e:2, f: 3}}}}) completes its execution

Call Stack
----------
EMPTY
*/