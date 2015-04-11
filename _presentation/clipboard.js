var myFunction = function() {
  var workshop = "Intermediate JavaScript and jQuery";
  console.log(workshop);    // logs "Intermediate JavaScript.."
};

console.log(workshop);      // ReferenceError: workshop is not defined

var location = null;        // global variable

var myFunction = function() {
  var location = null;      // local variable to the myFunction scope
};

var location = null;        // global variable

var myFunction = function() {
  location = null;          // global variable
};


(function IIFE() {
  var workshop = "Intermediate JavaScript & jQuery";      // local variable to the IIFE function scope
})();

var workshop = "Intermediate JavaScript & jQuery";        // global variable set to the window object


