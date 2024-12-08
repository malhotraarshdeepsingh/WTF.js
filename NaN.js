console.log(NaN === NaN);


// Output:- false
// By definition, NaN (Not-a-Number) is not equal to anything, including itself.


console.log(Object.is(NaN, NaN));


// Output:- true
// Object.is correctly identifies NaN as NaN. === does not.


console.log(typeof NaN); // number


const arr = [NaN];
console.log(arr.indexOf(NaN)); // -1


console.log(Math.sqrt(-1)); // NaN
console.log(0 / 0); // NaN
console.log("string" * 3); // NaN
// Any undefined or invalid math operation results in NaN.


console.log(NaN + 1); // NaN
console.log(NaN - 1); // NaN
console.log(NaN * 1); // NaN
console.log(NaN / 1); // NaN
console.log(Infinity - NaN); // NaN

console.log(NaN < 5); // false
console.log(NaN > 5); // false
console.log(NaN == 5); // false


// Any operation involving NaN results in NaN.


console.log(JSON.stringify(NaN)); // "null"
console.log(JSON.parse(JSON.stringify({ a: NaN }))); // { a: null }


// JSON.stringify converts NaN to null.


const obj = { NaN: "value" };
console.log(obj[NaN]); // "value"


// NaN is a valid key in objects.
// NaN is coerced into a string when used as an object key.
