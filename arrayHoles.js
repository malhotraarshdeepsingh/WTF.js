const arr = [1, , 3]; // Notice the missing element
console.log(arr.length);
console.log(arr[1]);
console.log(1 in arr);


// Output:- 3, undefined, false
// The array has a "hole" at index 1. Holes are not the same as undefined and are not considered "own properties" of the array.

