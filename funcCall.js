function test() {
  return hello();
  function hello() {
    return "Hello, world!";
  }
}

console.log(test()); 


// Output:- Hello, world!
// Function declarations are hoisted to the top of their scope, so hello() is available even before it's written.


