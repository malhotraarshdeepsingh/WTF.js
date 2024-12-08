console.log({} + []); 
console.log([] + {}); 

// Output:- [object Object], [object Object]
// Adding an object or array coerces them to strings. {} becomes "[object Object]", and [] becomes "".