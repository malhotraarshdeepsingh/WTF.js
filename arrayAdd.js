console.log(typeof([]+[])); 


// Output:- string
// Arrays are coerced into strings during addition. Two empty arrays become empty strings, and adding two empty strings results in "".

console.log([] + 1); // "1"
console.log([1] + 1); // "11"

// Adding an array to a number coerces the array into a string. [] becomes "" and [1] becomes "1", resulting in string concatenation.