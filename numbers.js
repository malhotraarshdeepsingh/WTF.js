console.log(1 < 2 < 3); // true
console.log(3 > 2 > 1); // false


// the greater than and less than operators are left-associative, meaning they are evaluated from left to right.
// 1 < 2 evaluates to true, which is coerced into 1. So 1 < 3 is true.
// 3 > 2 evaluates to true, which is coerced into 1. But 1 > 1 is false.


