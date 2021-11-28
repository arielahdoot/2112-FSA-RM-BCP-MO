// let's go over an example where we want to print out all of the elements in a potentially nested array
// note that this array consists of both arrays and other data types
let rsvpGroups = 
[
  ['Jane', 'Mel'], 
  'Jack', 
  ['Rohan', 'David', 'Meg']
];

for (let i = 0; i < rsvpGroups.length; i++) {
  let element = rsvpGroups[i]; // not sure if this is a string or an array
  if (Array.isArray(element)) {
    for (let j = 0; j < element.length; j++) {
      let name = element[j];
      console.log(name);
    }
  } 
  else {
    console.log(element)
  }
} 

/*
Notes:
--------

*/