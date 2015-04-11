// Example from MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

function init() {
  // define a local variable here
  var name = "John Doe";
  // displayName() is the inner function, a closure
  function displayName() {
    // use variable declared in the parent function
    alert(name);

    // add a function to log the name variable
    // invoke that function inside displayName()
    function logName() {
      console.log(name);
    }
    logName();
  }
  displayName();
}
init();
