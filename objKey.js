// Arrays Can Be Keys in Objects


const obj = {};
obj[[1, 2, 3]] = "value";
console.log(obj["1,2,3"]); 


// Output:- value
// Arrays can be keys in objects. However, JavaScript converts each array to a string when using it as a key.