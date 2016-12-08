// Example from MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

function init() {
  // define a local variable here

  // displayName() is the inner function, a closure
  function displayName() {
    // use variable declared in the parent function
    // alert();

    // add a function to log the name variable
    // invoke that function inside displayName()

  }
  displayName();
}
init();
