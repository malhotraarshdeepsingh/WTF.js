console.log([] == ![]); // true


// ![] is false, so [] == false.
// Arrays are truthy but coerced to strings during comparison, and "" == false evaluates to true.