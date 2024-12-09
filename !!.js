while (!!"false") {
  console.log('How Did This Even Work?');
}

// Any non-empty string is truthy, even "false". Negating it twice returns true.

console.log(!!{}); // true


// Objects are truthy in JavaScript. A double negation (!!) coerces it into a boolean, resulting in true.