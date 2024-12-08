console.log([1, 2, 11].sort()); 


// Output:- [1, 11, 2]
// Array.sort() converts numbers to strings before comparing. Since "11" comes before "2" lexicographically, the sort seems "wrong."