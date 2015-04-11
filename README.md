# intermediate-javascript
Exercise files for my Intermediate JavaScript and jQuery workshop at General Assembly.

## Vocab

* **Scope:** “Scope is the set of rules that determines where and how a variable (identifier) can be looked-up.” - Kyle Simpson, You Don't Know JS: Scope & Closure
  * **Function Scope:** Every variable defined in a function, is available for the entirety of that function.
  * **Global Scope:** "The scope that is visible in all other scopes." - MDN
  * **Global Variable:** A variable defined at the Global Scope.
* **IIFE:** Imediatly-Invoked Function Expression - a function wrapped in `()` to create an expression, and immediatly followed by a pair of `()` to invoke that function imediatly.
* **Closure:** "Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure 'remembers' the environment in which it was created." - MDN
  * **Variable Shadowing:** "occurs when a variable declared within a certain scope ... has the same name as a variable declared in an outer scope." - Wikipedia
* **for statement:** "The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement or a set of statements executed in the loop." - MDN
  * **initialization:** “An expression (including assignment expressions) or variable declaration. Typically used to initialize a counter variable. This expression may optionally declare new variables with the var keyword. These variables are not local to the loop, i.e. they are in the same scope the for loop is in. The result of this expression is discarded.” - MDN
  * **condition:** “An expression to be evaluated before each loop iteration. If this expression evaluates to true, statement is executed. This conditional test is optional. If omitted, the condition always evaluates to true. If the expression evaluates to false, execution skips to the first expression following the for construct.” - MDN
  * **final-expression:** “An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of condition. Generally used to update or increment the counter variable.” - MDN
  * **statement:** “A statement that is executed as long as the condition evaluates to true. To execute multiple statements within the loop, use a block statement ({ ... }) to group those statements.” - MDN
* **Arrays:** "JavaScript arrays are used to store multiple values in a single variable." - W3Schools 
