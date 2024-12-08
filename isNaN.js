console.log(isNaN("hello")); // true
console.log(Number.isNaN("hello")); // false


// isNaN coerces the argument into a number, while Number.isNaN checks strictly.