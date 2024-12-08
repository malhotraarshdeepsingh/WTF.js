console.log(parseInt("0x10")); // 16
console.log(parseInt("0x10", 10)); // 0

// parseInt defaults to detecting hex (0x) for base 16.
// With base 10 explicitly, it doesn't interpret 0x.