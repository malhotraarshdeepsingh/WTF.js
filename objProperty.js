const obj = {
    toString: () => "hello", 
    valueOf: () => 42, 
};
console.log(obj + 10); // 52

// JavaScript encounters obj, which is not a primitive type.
// The valueOf() method returns the primitive value of the specified object so toString() method is not called. The + operator then performs numeric addition: 42 + 10.

